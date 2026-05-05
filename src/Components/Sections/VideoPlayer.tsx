import { getYouTubeId } from "../../Lib/YoutubeVideoPlayer";
import YouTube, { type YouTubePlayer } from "react-youtube";
import { useRef, useEffect, useState, useCallback } from "react";
import type {
  VideoEntry,
  Step,
  BranchStep,
  TrajectoryData,
} from "../Json/Types";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

interface VideoPlayerProps {
  video: VideoEntry;
  trajectory: TrajectoryData | null | undefined;
  currentTimeSec: number;
  onTimeChange: (t: number) => void;
}

type VisiblePane = "both" | "sampled" | "full";

function formatTime(sec: number) {
  const safeSec = Number.isFinite(sec) ? Math.max(0, sec) : 0;
  const m = Math.floor(safeSec / 60);
  const s = Math.floor(safeSec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function clampTime(t: number, duration: number) {
  return Math.max(0, Math.min(duration, t));
}

function getYouTubeThumbnail(videoId: string | null) {
  if (!videoId) return null;
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

const SOURCE_WIDTH = 1408;
const SOURCE_HEIGHT = 1408;
const SOURCE_ASPECT = SOURCE_WIDTH / SOURCE_HEIGHT;
const MARKER_OFFSET_X = 5;
const MARKER_OFFSET_Y = 7;

function getVideoRectInsideContainer(
  containerWidth: number,
  containerHeight: number,
  videoAspect: number,
) {
  if (containerWidth <= 0 || containerHeight <= 0) {
    return {
      width: 0,
      height: 0,
      offsetX: 0,
      offsetY: 0,
    };
  }

  const containerAspect = containerWidth / containerHeight;

  if (containerAspect > videoAspect) {
    // Container is wider than the video.
    // YouTube will show black bars on left/right.
    const height = containerHeight;
    const width = height * videoAspect;

    return {
      width,
      height,
      offsetX: (containerWidth - width) / 2,
      offsetY: 0,
    };
  }

  // Container is taller than the video.
  // YouTube will show black bars on top/bottom.
  const width = containerWidth;
  const height = width / videoAspect;

  return {
    width,
    height,
    offsetX: 0,
    offsetY: (containerHeight - height) / 2,
  };
}

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

  const TOL = 3;

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
        xPct: (raw[0] / SOURCE_WIDTH) * 100,
        yPct: (raw[1] / SOURCE_HEIGHT) * 100,
        label: `${trajectory.object_a_name} (step ${step.step})`,
        color: "#fbbf24",
        ring: "ring-amber-400",
      });
    }

    const oyPx = meta.object_y_projected_pixel as [number, number] | undefined;

    if (oyPx) {
      result.push({
        xPct: (oyPx[0] / SOURCE_WIDTH) * 100,
        yPct: (oyPx[1] / SOURCE_HEIGHT) * 100,
        label: (meta.object_y_name as string) ?? "reference",
        color: "#34d399",
        ring: "ring-emerald-400",
      });
    }
  }

  return result;
}

function safeSeek(
  ref: React.MutableRefObject<YouTubePlayer | null>,
  timeSec: number,
) {
  const player = ref.current;
  if (!player) return;

  try {
    player.seekTo(timeSec, true);
  } catch {
    // Do not clear the ref aggressively.
    // YouTube sometimes throws transient API errors.
  }
}

function safePlayPause(
  ref: React.MutableRefObject<YouTubePlayer | null>,
  isPlaying: boolean,
) {
  const player = ref.current;
  if (!player) return;

  try {
    if (isPlaying) {
      player.playVideo?.();
    } else {
      player.pauseVideo?.();
    }
  } catch {
    // Ignore transient YouTube API failures.
  }
}

async function safeGetTime(
  ref: React.MutableRefObject<YouTubePlayer | null>,
): Promise<number | null> {
  const player = ref.current;
  if (!player) return null;

  try {
    const value = player.getCurrentTime?.();

    const t =
      value && typeof (value as Promise<number>).then === "function"
        ? await value
        : value;

    return typeof t === "number" && Number.isFinite(t) ? t : null;
  } catch {
    return null;
  }
}

function VideoPane({
  src,
  label,
  anchors,
  hidden,
  currentTimeSec,
  isPlaying,
  getTargetTime,
  getIsPlaying,
  onDurationReady,
  playerRef,
}: {
  src: string | null;
  label: string;
  anchors: ReturnType<typeof getAnchors>;
  hidden: boolean;
  currentTimeSec: number;
  isPlaying: boolean;
  getTargetTime: () => number;
  getIsPlaying: () => boolean;
  onDurationReady?: (d: number) => void;
  playerRef: React.MutableRefObject<YouTubePlayer | null>;
}) {
  const youtubeId = getYouTubeId(src);

  const [hasRenderedFrame, setHasRenderedFrame] = useState(false);
  const thumbnailUrl = getYouTubeThumbnail(youtubeId);

  useEffect(() => {
    setHasRenderedFrame(false);
  }, [youtubeId]);

  const paneRef = useRef<HTMLDivElement | null>(null);
  const [paneSize, setPaneSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = paneRef.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      setPaneSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const videoRect = getVideoRectInsideContainer(
    paneSize.width,
    paneSize.height,
    SOURCE_ASPECT,
  );

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    try {
      if (isPlaying) {
        player.playVideo?.();
      } else {
        player.pauseVideo?.();
      }
    } catch {
      // Ignore transient YouTube API failures.
    }
  }, [isPlaying, playerRef]);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    try {
      const now = player.getCurrentTime?.() ?? 0;
      if (Math.abs(now - currentTimeSec) > 1.25) {
        player.seekTo(currentTimeSec, true);
      }
    } catch {
      // Ignore transient YouTube API failures.
    }
  }, [currentTimeSec, playerRef]);

  return (
    <div
      ref={paneRef}
      className={`relative min-w-0 overflow-hidden bg-black ${
        hidden ? "hidden" : "flex-1"
      }`}
    >
      <div className="absolute left-2.5 top-2.5 z-10 rounded-md border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-300 backdrop-blur-sm">
        {label}
      </div>

      {youtubeId ? (
        <YouTube
          key={youtubeId}
          videoId={youtubeId}
          className="h-full w-full"
          iframeClassName="h-full w-full"
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

            try {
              player.mute();

              const target = getTargetTime();
              player.seekTo(target > 0 ? target : 0.01, true);

              window.setTimeout(() => {
                try {
                  player.seekTo(
                    getTargetTime() > 0 ? getTargetTime() : 0.01,
                    true,
                  );

                  if (getIsPlaying()) {
                    player.playVideo?.();
                  } else {
                    player.pauseVideo?.();
                  }

                  setHasRenderedFrame(true);
                } catch {
                  setHasRenderedFrame(true);
                }
              }, 500);
            } catch {
              setHasRenderedFrame(true);
            }

            const d = player.getDuration?.();
            if (typeof d === "number" && d > 0) {
              onDurationReady?.(d);
            }
          }}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-sm text-slate-600">
          No YouTube source
        </div>
      )}

      {thumbnailUrl && !hasRenderedFrame && (
        <img
          src={thumbnailUrl}
          alt=""
          className="pointer-events-none absolute inset-0 z-1 h-full w-full object-contain bg-black"
        />
      )}

      {anchors.map((a, i) => {
        const left =
          videoRect.offsetX +
          (a.xPct / 100) * videoRect.width +
          MARKER_OFFSET_X;
        const top =
          videoRect.offsetY +
          (a.yPct / 100) * videoRect.height +
          MARKER_OFFSET_Y;

        return (
          <div
            key={i}
            className="pointer-events-none absolute"
            style={{
              left,
              top,
              transform: "translate(-50%, -50%)",
              zIndex: 20,
            }}
          >
            <div
              className="absolute inset-0 animate-ping rounded-full opacity-60"
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
              className="h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 shadow-lg"
              style={{
                background: a.color,
                borderColor: "#fff",
                boxShadow: `0 0 10px ${a.color}88`,
              }}
            />

            <div
              className="absolute left-1/2 -top-7 -translate-x-1/2 whitespace-nowrap rounded px-1.5 py-0.5 text-[10px] font-semibold text-white"
              style={{ background: a.color }}
            >
              {a.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PaneToggleButton({
  side,
  direction,
  label,
  onClick,
}: {
  side: "left" | "right";
  direction: "inward" | "outward";
  label: string;
  onClick: () => void;
}) {
  const Icon =
    side === "left"
      ? direction === "inward"
        ? ChevronRight
        : ChevronLeft
      : direction === "inward"
        ? ChevronLeft
        : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      className={`absolute top-1/2 z-30 flex h-12 w-8 -translate-y-1/2 items-center justify-center border border-white/10 bg-black/70 text-white shadow-lg backdrop-blur-sm transition-all hover:w-10 hover:bg-blue-600 ${
        side === "left"
          ? "left-0 rounded-r-xl border-l-0"
          : "right-0 rounded-l-xl border-r-0"
      }`}
    >
      <Icon className="h-5 w-5" strokeWidth={2.5} />
    </button>
  );
}

export function VideoPlayer({
  video,
  trajectory,
  currentTimeSec,
  onTimeChange,
}: VideoPlayerProps) {
  const [duration, setDuration] = useState(video.duration ?? 220);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [visiblePane, setVisiblePane] = useState<VisiblePane>("full");

  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [hoverPct, setHoverPct] = useState<number | null>(null);

  const sampledRef = useRef<YouTubePlayer | null>(null);
  const fullRef = useRef<YouTubePlayer | null>(null);
  const scrubberRef = useRef<HTMLDivElement | null>(null);

  const targetTimeRef = useRef(currentTimeSec);
  const isPlayingRef = useRef(isPlaying);
  const seekingUntilRef = useRef(0);
  const restoringUntilRef = useRef(0);

  const showSampled = visiblePane === "both" || visiblePane === "sampled";
  const showFull = visiblePane === "both" || visiblePane === "full";

  const seekVersionRef = useRef(0);
  const seekVerifyTimeoutRef = useRef<number | null>(null);

  const getAllRefs = useCallback(() => {
    return [sampledRef, fullRef];
  }, []);

  const getPrimaryRef = useCallback(() => {
    if (visiblePane === "sampled") return sampledRef;
    if (visiblePane === "full") return fullRef;
    return fullRef.current ? fullRef : sampledRef;
  }, [visiblePane]);

  const seekAllPlayers = useCallback(
    (timeSec: number) => {
      const t = clampTime(timeSec, duration);

      // Every seek gets a version. Older delayed seeks will be ignored.
      seekVersionRef.current += 1;
      const seekVersion = seekVersionRef.current;

      targetTimeRef.current = t;
      seekingUntilRef.current = performance.now() + 800;
      onTimeChange(t);

      // Cancel previous delayed verification.
      if (seekVerifyTimeoutRef.current !== null) {
        window.clearTimeout(seekVerifyTimeoutRef.current);
        seekVerifyTimeoutRef.current = null;
      }

      // Immediate seek to latest requested time.
      getAllRefs().forEach((ref) => {
        safeSeek(ref, t);
      });

      // Only verify the most recent seek.
      seekVerifyTimeoutRef.current = window.setTimeout(() => {
        if (seekVersion !== seekVersionRef.current) return;

        getAllRefs().forEach((ref) => {
          safeGetTime(ref).then((now) => {
            if (now !== null && Math.abs(now - t) > 0.8) {
              safeSeek(ref, t);
            }

            safePlayPause(ref, isPlayingRef.current);
          });

          safePlayPause(ref, isPlayingRef.current);
        });

        if (seekVersion === seekVersionRef.current) {
          seekingUntilRef.current = 0;
        }

        seekVerifyTimeoutRef.current = null;
      }, 350);
    },
    [duration, getAllRefs, onTimeChange],
  );

  useEffect(() => {
    if (!isPlaying) return;

    let cancelled = false;

    const intervalId = window.setInterval(async () => {
      const nowMs = performance.now();

      if (nowMs < seekingUntilRef.current) return;
      if (nowMs < restoringUntilRef.current) return;

      const primaryRef = getPrimaryRef();
      const t = await safeGetTime(primaryRef);

      if (cancelled || t === null) return;

      targetTimeRef.current = t;
      onTimeChange(t);
    }, 100);

    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
    };
  }, [isPlaying, getPrimaryRef, onTimeChange]);

  const playPauseAllPlayers = useCallback(
    (nextPlaying: boolean) => {
      isPlayingRef.current = nextPlaying;
      setIsPlaying(nextPlaying);

      getAllRefs().forEach((ref) => {
        safePlayPause(ref, nextPlaying);
      });

      window.setTimeout(() => {
        getAllRefs().forEach((ref) => {
          safePlayPause(ref, nextPlaying);
        });
      }, 250);
    },
    [getAllRefs],
  );

  const switchVisiblePane = useCallback(
    (nextPane: VisiblePane) => {
      restoringUntilRef.current = performance.now() + 1200;
      setVisiblePane(nextPane);

      window.setTimeout(() => {
        const t = targetTimeRef.current;

        getAllRefs().forEach((ref) => safeSeek(ref, t));

        window.setTimeout(() => {
          getAllRefs().forEach((ref) => {
            safeSeek(ref, t);
            safePlayPause(ref, isPlayingRef.current);
          });
        }, 400);
      }, 0);
    },
    [getAllRefs],
  );

  useEffect(() => {
    return () => {
      if (seekVerifyTimeoutRef.current !== null) {
        window.clearTimeout(seekVerifyTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    targetTimeRef.current = currentTimeSec;
  }, [currentTimeSec]);

  useEffect(() => {
    setDuration(video.duration ?? 220);
    setVisiblePane("full");
    playPauseAllPlayers(false);
    targetTimeRef.current = currentTimeSec;
    seekingUntilRef.current = 0;
    restoringUntilRef.current = 0;
  }, [video.id]);

  const anchors = getAnchors(trajectory ?? undefined, currentTimeSec);

  type Marker = {
    time: number;
    pct: number;
    color: string;
    label: string;
    bg: string;
  };

  const markers: Marker[] = [];
  const selectedTrajectory = trajectory ?? null;

  if (selectedTrajectory && duration > 0) {
    const traj = selectedTrajectory;

    markers.push({
      time: traj.query_time_sec,
      pct: (traj.query_time_sec / duration) * 100,
      color: "#fbbf24",
      label: "query",
      bg: "bg-amber-400",
    });

    /*     if (traj.generation_info.oos_span_start_sec) {
      markers.push({
        pct: (traj.generation_info.oos_span_start_sec / duration) * 100,
        color: "#f87171",
        label: "OoS start",
        bg: "bg-red-400",
      });
    } */
  }

  const progress = duration > 0 ? (currentTimeSec / duration) * 100 : 0;

  const getPctFromPointer = useCallback((clientX: number) => {
    const el = scrubberRef.current;
    if (!el) return 0;

    const rect = el.getBoundingClientRect();
    if (rect.width <= 0) return 0;

    return Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
  }, []);

  const updateHoverFromPointer = useCallback(
    (clientX: number) => {
      const pct = getPctFromPointer(clientX);
      const rawTime = pct * duration;

      const SNAP_SEC = 1.5;

      const nearestMarker = markers.reduce<Marker | null>((nearest, marker) => {
        const currentDistance = Math.abs(marker.time - rawTime);

        if (currentDistance > SNAP_SEC) return nearest;
        if (!nearest) return marker;

        const nearestDistance = Math.abs(nearest.time - rawTime);
        return currentDistance < nearestDistance ? marker : nearest;
      }, null);

      const displayTime = nearestMarker ? nearestMarker.time : rawTime;
      const displayPct = nearestMarker ? nearestMarker.pct : pct * 100;

      setHoverPct(displayPct);
      setHoverTime(displayTime);
    },
    [duration, getPctFromPointer, markers],
  );

  const getSnappedTimeFromPointer = useCallback(
    (clientX: number) => {
      const pct = getPctFromPointer(clientX);
      const rawTime = pct * duration;

      const SNAP_SEC = 1.0;

      const nearestMarker = markers.reduce<Marker | null>((nearest, marker) => {
        const markerTime = marker.time;
        const currentDistance = Math.abs(markerTime - rawTime);

        if (currentDistance > SNAP_SEC) return nearest;

        if (!nearest) return marker;

        const nearestDistance = Math.abs(nearest.time - rawTime);
        return currentDistance < nearestDistance ? marker : nearest;
      }, null);

      return nearestMarker ? nearestMarker.time : rawTime;
    },
    [duration, getPctFromPointer, markers],
  );

  useEffect(() => {
    const syncInterval = window.setInterval(async () => {
      if (!isPlayingRef.current) return;

      const nowMs = performance.now();
      if (nowMs < seekingUntilRef.current) return;
      if (nowMs < restoringUntilRef.current) return;

      const primaryRef = getPrimaryRef();
      const primaryTime = await safeGetTime(primaryRef);

      if (primaryTime === null) return;

      targetTimeRef.current = primaryTime;
      onTimeChange(primaryTime);

      getAllRefs().forEach(async (ref) => {
        if (ref === primaryRef) return;

        const otherTime = await safeGetTime(ref);
        if (otherTime === null) return;

        if (Math.abs(otherTime - primaryTime) > 0.8) {
          safeSeek(ref, primaryTime);
        }
      });
    }, 500);

    return () => window.clearInterval(syncInterval);
  }, [getAllRefs, getPrimaryRef, onTimeChange]);

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
        playPauseAllPlayers(!isPlayingRef.current);
      }

      if (e.code === "ArrowLeft") {
        e.preventDefault();
        seekAllPlayers(targetTimeRef.current - 5);
      }

      if (e.code === "ArrowRight") {
        e.preventDefault();
        seekAllPlayers(targetTimeRef.current + 5);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playPauseAllPlayers, seekAllPlayers]);

  return (
    <div className="flex h-full min-h-0 flex-col bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <div className="relative flex min-h-0 flex-1 gap-px bg-slate-200 dark:bg-slate-800/40">
        {visiblePane === "full" && (
          <PaneToggleButton
            side="left"
            direction="inward"
            label="Show 1 FPS sampled video"
            onClick={() => switchVisiblePane("both")}
          />
        )}

        <VideoPane
          src={video.sampledUrl}
          label="1 FPS · sampled"
          anchors={anchors}
          hidden={!showSampled}
          currentTimeSec={currentTimeSec}
          isPlaying={isPlaying}
          getTargetTime={() => targetTimeRef.current}
          getIsPlaying={() => isPlayingRef.current}
          onDurationReady={setDuration}
          playerRef={sampledRef}
        />

        <VideoPane
          src={video.fullUrl}
          label="Full FPS"
          anchors={anchors}
          hidden={!showFull}
          currentTimeSec={currentTimeSec}
          isPlaying={isPlaying}
          getTargetTime={() => targetTimeRef.current}
          getIsPlaying={() => isPlayingRef.current}
          onDurationReady={setDuration}
          playerRef={fullRef}
        />

        {visiblePane === "sampled" && (
          <PaneToggleButton
            side="right"
            direction="inward"
            label="Show full FPS video"
            onClick={() => switchVisiblePane("both")}
          />
        )}

        {visiblePane === "both" && (
          <>
            <PaneToggleButton
              side="left"
              direction="outward"
              label="Hide 1 FPS sampled video"
              onClick={() => switchVisiblePane("full")}
            />

            <PaneToggleButton
              side="right"
              direction="outward"
              label="Hide full FPS video"
              onClick={() => switchVisiblePane("sampled")}
            />
          </>
        )}
      </div>

      <div className="shrink-0 border-t border-slate-200 bg-white px-4 pb-4 pt-3 dark:border-white/[0.07] dark:bg-slate-900">
        <div
          ref={scrubberRef}
          className="relative flex h-9 cursor-pointer select-none items-center"
          onPointerEnter={(e) => {
            updateHoverFromPointer(e.clientX);
          }}
          onPointerMove={(e) => {
            updateHoverFromPointer(e.clientX);

            if (!isDragging) return;

            const time = getSnappedTimeFromPointer(e.clientX);
            seekAllPlayers(time);
          }}
          onPointerLeave={() => {
            if (!isDragging) {
              setHoverTime(null);
              setHoverPct(null);
            }
          }}
          onPointerDown={(e) => {
            setIsDragging(true);
            e.currentTarget.setPointerCapture(e.pointerId);

            const time = getSnappedTimeFromPointer(e.clientX);
            updateHoverFromPointer(e.clientX);
            seekAllPlayers(time);
          }}
          onPointerUp={(e) => {
            const time = getSnappedTimeFromPointer(e.clientX);
            seekAllPlayers(time);

            setIsDragging(false);

            try {
              e.currentTarget.releasePointerCapture(e.pointerId);
            } catch {
              // Ignore release errors.
            }
          }}
          onPointerCancel={() => {
            setIsDragging(false);
            setHoverTime(null);
            setHoverPct(null);
          }}
        >
          <div className="absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-slate-300 dark:bg-slate-700/80" />

          <div
            className="absolute left-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-linear-to-r from-blue-500 to-violet-500"
            style={{
              width: `${progress}%`,
              transition: isDragging ? "none" : "width 0.08s linear",
            }}
          />

          {hoverTime !== null && hoverPct !== null && (
            <>
              <div
                className="pointer-events-none absolute top-1/2 z-20 h-3.5 w-0.5 -translate-y-1/2 rounded-full bg-white shadow dark:bg-slate-200"
                style={{ left: `${hoverPct}%` }}
              />

              <div
                className="pointer-events-none absolute bottom-8 z-30 -translate-x-1/2 rounded-md border border-slate-200 bg-white px-2 py-1 font-mono text-[11px] font-semibold tabular-nums text-slate-700 shadow-lg dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                style={{ left: `${hoverPct}%` }}
              >
                {formatTime(hoverTime)}
              </div>
            </>
          )}

          <div
            className="pointer-events-none absolute top-1/2 z-10 h-4 w-4 rounded-full border-2 border-blue-500 bg-white shadow-md shadow-blue-500/30"
            style={{
              left: `${progress}%`,
              transform: "translate(-50%, -50%)",
            }}
          />

          {markers.map((m, i) => (
            <div
              key={i}
              title={m.label}
              className="pointer-events-none absolute top-1/2 z-5 h-2.5 w-0.5 -translate-y-1/2 rounded-sm opacity-80"
              style={{ left: `${m.pct}%`, background: m.color }}
            />
          ))}
        </div>

        <div className="mt-2 flex items-center gap-3">
          <button
            onClick={() => {
              playPauseAllPlayers(!isPlayingRef.current);
            }}
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
