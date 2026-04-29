"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import type { VideoEntry, Step, BranchStep } from "../../pages/QuestionView";

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
  trajectory: VideoEntry["trajectory"],
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
  videoRef,
}: {
  src: string | null;
  label: string;
  anchors: ReturnType<typeof getAnchors>;
  currentTimeSec: number;
  onDurationReady?: (d: number) => void;
  videoRef: React.RefObject<HTMLVideoElement | null>;
}) {
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (Math.abs(v.currentTime - currentTimeSec) > 0.3) {
      v.currentTime = currentTimeSec;
    }
  }, [currentTimeSec, videoRef]);

  return (
    <div className="relative flex-1 bg-black overflow-hidden min-w-0">
      {/* Label */}
      <div className="absolute top-2.5 left-2.5 z-10 bg-black/60 backdrop-blur-sm rounded-md px-2.5 py-1 text-[10px] font-bold text-slate-300 uppercase tracking-widest border border-white/10">
        {label}
      </div>

      {src ? (
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-contain"
          onLoadedMetadata={(e) => onDurationReady?.(e.currentTarget.duration)}
          muted
          preload="metadata"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-slate-600 text-sm">
          No source
        </div>
      )}

      {/* Anchor overlays */}
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
          {/* Outer pulsing ring */}
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
          {/* Inner dot */}
          <div
            className="w-3.5 h-3.5 rounded-full border-2 shadow-lg -translate-x-1/2 -translate-y-1/2"
            style={{
              background: a.color,
              borderColor: "#fff",
              boxShadow: `0 0 10px ${a.color}88`,
            }}
          />
          {/* Label tooltip */}
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
  const sampledRef = useRef<HTMLVideoElement>(null);
  const fullRef = useRef<HTMLVideoElement>(null);
  const scrubberRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const anchors = getAnchors(video.trajectory ?? undefined, currentTimeSec);

  // Sync play/pause across both videos
  useEffect(() => {
    [sampledRef, fullRef].forEach((ref) => {
      if (!ref.current) return;
      if (isPlaying) ref.current.play().catch(() => {});
      else ref.current.pause();
    });
  }, [isPlaying]);

  // RAF ticker while playing
  useEffect(() => {
    if (!isPlaying) {
      cancelAnimationFrame(rafRef.current);
      return;
    }
    const tick = () => {
      if (fullRef.current) onTimeChange(fullRef.current.currentTime);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPlaying, onTimeChange]);

  const seekTo = useCallback(
    (pct: number) => {
      const t = Math.max(0, Math.min(1, pct)) * duration;
      onTimeChange(t);
      [sampledRef, fullRef].forEach((ref) => {
        if (ref.current) ref.current.currentTime = t;
      });
    },
    [duration, onTimeChange],
  );

  const handleMouseEvent = useCallback(
    (e: React.MouseEvent, active: boolean) => {
      if (!active || !scrubberRef.current) return;
      const rect = scrubberRef.current.getBoundingClientRect();
      seekTo((e.clientX - rect.left) / rect.width);
    },
    [seekTo],
  );

  // Timeline markers derived from trajectory
  type Marker = { pct: number; color: string; label: string; bg: string };
  const markers: Marker[] = [];
  if (video.trajectory && duration > 0) {
    const traj = video.trajectory;
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
    <div className="flex flex-col h-full min-h-0">
      {/* Dual video panes */}
      <div className="flex flex-1 min-h-0 gap-px bg-slate-800/40">
        <VideoPane
          src={video.sampledUrl}
          label="1 FPS · sampled"
          anchors={anchors}
          currentTimeSec={currentTimeSec}
          onDurationReady={setDuration}
          videoRef={sampledRef}
        />
        <VideoPane
          src={video.fullUrl}
          label="Full FPS"
          anchors={anchors}
          currentTimeSec={currentTimeSec}
          videoRef={fullRef}
        />
      </div>

      {/* Controls */}
      <div className="shrink-0 bg-slate-900 border-t border-white/[0.07] px-4 pt-3 pb-4">
        {/* Scrubber */}
        <div
          ref={scrubberRef}
          className="relative h-9 flex items-center cursor-pointer select-none"
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMouseEvent(e, true);
          }}
          onMouseMove={(e) => handleMouseEvent(e, isDragging)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
        >
          {/* Track */}
          <div className="absolute inset-x-0 top-3.75 h-1.5 rounded-full bg-slate-700/80" />

          {/* Filled portion */}
          <div
            className="absolute top-3.75 left-0 h-1.5 rounded-full bg-linear-to-r from-blue-500 to-violet-500"
            style={{
              width: `${progress}%`,
              transition: isDragging ? "none" : "width 0.08s linear",
            }}
          />

          {/* Thumb */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-blue-500 shadow-md shadow-blue-500/30 z-10"
            style={{ left: `${progress}%`, transform: "translate(-50%, -50%)" }}
          />

          {/* Event markers */}
          {markers.map((m, i) => (
            <div
              key={i}
              title={m.label}
              className="absolute top-3.25 h-2.5 w-0.5 rounded-sm opacity-80 z-5"
              style={{ left: `${m.pct}%`, background: m.color }}
            />
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex items-center gap-3 mt-2">
          {/* Play/pause */}
          <button
            onClick={() => setIsPlaying((p) => !p)}
            className="w-9 h-9 rounded-lg bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white text-sm shrink-0 transition-all shadow-lg shadow-blue-600/30 hover:scale-105"
          >
            {isPlaying ? "⏸" : "▶"}
          </button>

          {/* Timecode */}
          <span className="font-mono text-[12px] text-slate-400 tabular-nums">
            {formatTime(currentTimeSec)} / {formatTime(duration)}
          </span>

          {/* Marker legend */}
          <div className="flex items-center gap-3 ml-auto flex-wrap">
            {markers.map((m, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 text-[11px] text-slate-500"
              >
                <span
                  className="inline-block w-2 h-2 rounded-sm"
                  style={{ background: m.color }}
                />
                {m.label}
              </span>
            ))}
          </div>
        </div>

        {/* Video metadata */}
        <div className="mt-2.5 flex items-center gap-2 flex-wrap">
          <span className="text-[11px] text-slate-600 font-mono">
            {video.id}
          </span>
          {video.trajectory && (
            <>
              <span className="text-slate-700 text-[11px]">·</span>
              <span className="text-[11px] px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-400 font-medium">
                {video.trajectory.object_a_name}
              </span>
              <span className="text-slate-700 text-[11px]">·</span>
              <span className="text-[11px] text-slate-600 font-mono">
                {video.trajectory.trajectory_id}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
