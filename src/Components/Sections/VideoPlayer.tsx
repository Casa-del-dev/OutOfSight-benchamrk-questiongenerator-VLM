import { getYouTubeId } from "../../Lib/YoutubeVideoPlayer";
import YouTube, { type YouTubePlayer } from "react-youtube";
import { useRef, useEffect, useState, useCallback } from "react";
import type {
  VideoEntry,
  Step,
  BranchStep,
  TrajectoryData,
} from "../Json/Types";
import { Play, Pause } from "lucide-react";

interface VideoPlayerProps {
  video: VideoEntry;
  currentTimeSec: number;
  onTimeChange: (t: number) => void;
}

function formatTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

// ─── Derive anchor markers from trajectory at a given timestamp ───────────────

function getAnchors(
  trajectory: TrajectoryData | undefined,
  timeSec: number,
): {
  xPct: number;
  yPct: number;
  label: string;
  color: string;
  ring: string;
}[] {
  if (!trajectory) return [];
  const result: {
    xPct: number;
    yPct: number;
    label: string;
    color: string;
    ring: string;
  }[] = [];
  const TOL = 1.5;

  const allSteps: (Step | BranchStep)[] = [
    ...trajectory.incremental_steps,
    ...Object.values(trajectory.branch_groups).flat(),
  ];

  for (const step of allSteps) {
    const meta = step.answer_metadata;
    const refTime =
      meta.sampled_last_visible_time_sec ??
      meta.last_placement_time_sec ??
      trajectory.query_time_sec;

    if (Math.abs(refTime - timeSec) > TOL) continue;

    const norm = meta.normalized_projected_pixel as
      | [number, number]
      | null
      | undefined;
    const raw = meta.projected_pixel as [number, number] | null | undefined;

    if (norm) {
      result.push({
        xPct: norm[0] * 100,
        yPct: norm[1] * 100,
        label: `${trajectory.object_a_name} (step ${step.step})`,
        color: "#60a5fa",
        ring: "ring-blue-400",
      });
    } else if (raw) {
      result.push({
        xPct: (raw[0] / 1408) * 100,
        yPct: (raw[1] / 1120) * 100,
        label: `${trajectory.object_a_name} (step ${step.step})`,
        color: "#fbbf24",
        ring: "ring-amber-400",
      });
    }

    const oyPx = meta.object_y_projected_pixel as [number, number] | undefined;
    if (oyPx) {
      result.push({
        xPct: (oyPx[0] / 1408) * 100,
        yPct: (oyPx[1] / 1120) * 100,
        label: (meta.object_y_name as string) ?? "reference",
        color: "#34d399",
        ring: "ring-emerald-400",
      });
    }
  }

  return result;
}

// ─── Single video pane ────────────────────────────────────────────────────────

function VideoPane({
  src,
  label,
  anchors,
  currentTimeSec,
  onDurationReady,
  playerRef,
}: {
  src: string | null;
  label: string;
  anchors: ReturnType<typeof getAnchors>;
  currentTimeSec: number;
  onDurationReady?: (d: number) => void;
  playerRef: React.MutableRefObject<YouTubePlayer | null>;
}) {
  const youtubeId = getYouTubeId(src);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    const t = player.getCurrentTime();

    if (Math.abs(t - currentTimeSec) > 0.3) {
      player.seekTo(currentTimeSec, true);
    }
  }, [currentTimeSec, playerRef]);

  return (
    <div className="relative flex-1 bg-black overflow-hidden min-w-0">
      <div className="absolute top-2.5 left-2.5 z-10 bg-black/60 backdrop-blur-sm rounded-md px-2.5 py-1 text-[10px] font-bold text-slate-300 uppercase tracking-widest border border-white/10">
        {label}
      </div>

      {youtubeId ? (
        <YouTube
          videoId={youtubeId}
          className="w-full h-full"
          iframeClassName="w-full h-full"
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              controls: 0,
              modestbranding: 1,
              rel: 0,
              disablekb: 1,
              fs: 0,
              playsinline: 1,
            },
          }}
          onReady={(e) => {
            const player = e.target;
            playerRef.current = player;
            player.mute();

            const duration = e.target.getDuration?.();
            if (duration) onDurationReady?.(duration);
          }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-slate-600 text-sm">
          No YouTube source
        </div>
      )}

      {anchors.map((a, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${a.xPct}%`,
            top: `${a.yPct}%`,
            transform: "translate(-50%, -50%)",
            zIndex: 20,
          }}
        >
          <div
            className="absolute inset-0 rounded-full animate-ping opacity-60"
            style={{
              width: 28,
              height: 28,
              background: a.color + "33",
              border: `2px solid ${a.color}`,
              left: -14,
              top: -14,
            }}
          />

          <div
            className="w-3.5 h-3.5 rounded-full border-2 shadow-lg -translate-x-1/2 -translate-y-1/2"
            style={{
              background: a.color,
              borderColor: "#fff",
              boxShadow: `0 0 10px ${a.color}88`,
            }}
          />

          <div
            className="absolute left-1/2 -translate-x-1/2 -top-7 whitespace-nowrap text-[10px] font-semibold rounded px-1.5 py-0.5 text-white"
            style={{ background: a.color }}
          >
            {a.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Main VideoPlayer ─────────────────────────────────────────────────────────

export function VideoPlayer({
  video,
  currentTimeSec,
  onTimeChange,
}: VideoPlayerProps) {
  const [duration, setDuration] = useState(video.duration ?? 220);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const sampledRef = useRef<YouTubePlayer | null>(null);
  const fullRef = useRef<YouTubePlayer | null>(null);
  const scrubberRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number>(0);

  const selectedTrajectoryForAnchors = video.trajectory
    ? Object.values(video.trajectory)[0]
    : undefined;
  const anchors = getAnchors(selectedTrajectoryForAnchors, currentTimeSec);
  const seekToTime = useCallback(
    (timeSec: number) => {
      const t = Math.max(0, Math.min(duration, timeSec));

      onTimeChange(t);

      [sampledRef, fullRef].forEach((ref) => {
        ref.current?.seekTo(t, true);
      });
    },
    [duration, onTimeChange],
  );
  // Sync play/pause across both videos
  useEffect(() => {
    [sampledRef, fullRef].forEach((ref) => {
      const player = ref.current;
      if (!player) return;

      if (isPlaying) {
        player.playVideo?.();
      } else {
        player.pauseVideo?.();
      }
    });
  }, [isPlaying]);

  // RAF ticker while playing
  useEffect(() => {
    if (!isPlaying) {
      cancelAnimationFrame(rafRef.current);
      return;
    }

    const tick = () => {
      const player = fullRef.current;

      if (player) {
        const t = player.getCurrentTime();
        onTimeChange(t);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafRef.current);
  }, [isPlaying, onTimeChange]);

  const seekTo = useCallback(
    (pct: number) => {
      seekToTime(Math.max(0, Math.min(1, pct)) * duration);
    },
    [duration, seekToTime],
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;

      if (
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable
      ) {
        return;
      }

      if (e.code === "Space") {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }

      if (e.code === "ArrowLeft") {
        e.preventDefault();
        seekToTime(currentTimeSec - 5);
      }

      if (e.code === "ArrowRight") {
        e.preventDefault();
        seekToTime(currentTimeSec + 5);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentTimeSec, seekToTime]);

  // Timeline markers derived from trajectory
  type Marker = { pct: number; color: string; label: string; bg: string };
  const markers: Marker[] = [];
  const selectedTrajectory = video.trajectory
    ? Object.values(video.trajectory)[0]
    : null;
  if (selectedTrajectory && duration > 0) {
    const traj = selectedTrajectory;
    markers.push({
      pct: (traj.clip_start_time_sec / duration) * 100,
      color: "#60a5fa",
      label: "clip start",
      bg: "bg-blue-400",
    });
    markers.push({
      pct: (traj.query_time_sec / duration) * 100,
      color: "#fbbf24",
      label: "query",
      bg: "bg-amber-400",
    });
    if (traj.generation_info.oos_span_start_sec)
      markers.push({
        pct: (traj.generation_info.oos_span_start_sec / duration) * 100,
        color: "#f87171",
        label: "OoS start",
        bg: "bg-red-400",
      });
  }

  const progress = duration > 0 ? (currentTimeSec / duration) * 100 : 0;

  return (
    <div className="flex h-full min-h-0 flex-col bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      {/* Dual video panes */}
      <div className="flex min-h-0 flex-1 gap-px bg-slate-200 dark:bg-slate-800/40">
        <VideoPane
          src={video.sampledUrl}
          label="1 FPS · sampled"
          anchors={anchors}
          currentTimeSec={currentTimeSec}
          onDurationReady={setDuration}
          playerRef={sampledRef}
        />

        <VideoPane
          src={video.fullUrl}
          label="Full FPS"
          anchors={anchors}
          currentTimeSec={currentTimeSec}
          playerRef={fullRef}
        />
      </div>

      {/* Controls */}
      <div className="shrink-0 border-t border-slate-200 bg-white px-4 pb-4 pt-3 dark:border-white/[0.07] dark:bg-slate-900">
        {/* Scrubber */}
        <div
          ref={scrubberRef}
          className="relative flex h-9 cursor-pointer select-none items-center"
          onPointerDown={(e) => {
            setIsDragging(true);
            e.currentTarget.setPointerCapture(e.pointerId);

            const rect = e.currentTarget.getBoundingClientRect();
            seekTo((e.clientX - rect.left) / rect.width);
          }}
          onPointerMove={(e) => {
            if (!isDragging || !scrubberRef.current) return;

            const rect = scrubberRef.current.getBoundingClientRect();
            seekTo((e.clientX - rect.left) / rect.width);
          }}
          onPointerUp={(e) => {
            setIsDragging(false);
            e.currentTarget.releasePointerCapture(e.pointerId);
          }}
          onPointerCancel={() => setIsDragging(false)}
        >
          {/* Track */}
          <div className="absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-slate-300 dark:bg-slate-700/80" />

          {/* Filled progress */}
          <div
            className="absolute left-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-linear-to-r from-blue-500 to-violet-500"
            style={{
              width: `${progress}%`,
              transition: isDragging ? "none" : "width 0.08s linear",
            }}
          />

          {/* Thumb */}
          <div
            className="pointer-events-none absolute top-1/2 z-10 h-4 w-4 rounded-full border-2 border-blue-500 bg-white shadow-md shadow-blue-500/30"
            style={{
              left: `${progress}%`,
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* Event markers */}
          {markers.map((m, i) => (
            <div
              key={i}
              title={m.label}
              className="pointer-events-none absolute top-1/2 z-5 h-2.5 w-0.5 -translate-y-1/2 rounded-sm opacity-80"
              style={{ left: `${m.pct}%`, background: m.color }}
            />
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-2 flex items-center gap-3">
          <button
            onClick={() => setIsPlaying((p) => !p)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-sm text-white shadow-lg shadow-blue-600/30 transition-all hover:scale-105 hover:bg-blue-500"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" strokeWidth={2.5} />
            ) : (
              <Play className="ml-0.5 h-4 w-4" strokeWidth={2.5} />
            )}
          </button>

          <span className="font-mono text-[12px] tabular-nums text-slate-600 dark:text-slate-400">
            {formatTime(currentTimeSec)} / {formatTime(duration)}
          </span>

          <div className="ml-auto flex flex-wrap items-center gap-3">
            {markers.map((m, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-500"
              >
                <span
                  className="inline-block h-2 w-2 rounded-sm"
                  style={{ background: m.color }}
                />
                {m.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
