import { useEffect, useRef, useState } from "react";
import { QuestionPanel } from "../Components/Sections/QuestionPanel";
import { VideoPlayer } from "../Components/Sections/VideoPlayer";
import {
  JsonViewer,
  UserVideoSelector,
} from "../Components/Sections/JsonViewer";
import { USERS } from "../Components/Json/Users";
import type { TrajectoryData } from "../Components/Json/Types";
import { Check, ChevronDown, FileQuestionMark } from "lucide-react";

const STORAGE_KEYS = {
  selectedVideoId: "questionView.selectedVideoId",
  selectedTrajectoryByVideo: "questionView.selectedTrajectoryByVideo",
} as const;

function getSavedTrajectoryByVideo(): Record<string, string> {
  if (typeof window === "undefined") return {};

  try {
    const raw = localStorage.getItem(STORAGE_KEYS.selectedTrajectoryByVideo);
    if (!raw) return {};

    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

function getInitialTrajectoryKeyForVideo(
  videoId: string,
  trajectory: Record<string, TrajectoryData> | undefined,
) {
  if (!trajectory) return null;

  const keys = Object.keys(trajectory);
  if (keys.length === 0) return null;

  const savedByVideo = getSavedTrajectoryByVideo();
  const savedKey = savedByVideo[videoId];

  return savedKey && savedKey in trajectory ? savedKey : keys[0];
}

function getInitialVideoSelection() {
  if (typeof window === "undefined") {
    const user = USERS[0];
    const video = user.videos[0];

    return {
      userId: user.userId,
      videoId: video.id,
    };
  }

  const savedVideoId = localStorage.getItem(STORAGE_KEYS.selectedVideoId);

  for (const user of USERS) {
    const video = user.videos.find((v) => v.id === savedVideoId);

    if (video) {
      return {
        userId: user.userId,
        videoId: video.id,
      };
    }
  }

  const user = USERS[0];
  const video = user.videos[0];

  return {
    userId: user.userId,
    videoId: video.id,
  };
}

function TrajectoryDropdown({
  value,
  options,
  onChange,
}: {
  value: string | null;
  options: string[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as Node | null;

      if (target && dropdownRef.current?.contains(target)) {
        return;
      }

      setOpen(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.blur();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (options.length === 0) return null;

  const selectedLabel = value ?? options[0];

  return (
    <div ref={dropdownRef} className="relative mt-1">
      <button
        type="button"
        ref={buttonRef}
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between rounded-md border bg-white px-2 py-1.5 text-left text-[12px] text-slate-700 transition-all dark:bg-slate-900 dark:text-slate-300 ${
          open
            ? "border-blue-400 ring-2 ring-blue-500/20 dark:border-blue-500/50"
            : "border-slate-300 hover:border-slate-400 dark:border-white/[0.07] dark:hover:border-white/20"
        }`}
      >
        <span className="truncate">{selectedLabel}</span>

        <ChevronDown
          className={`h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute left-0 right-0 top-full z-40 mt-1 origin-top overflow-hidden rounded-md border border-slate-200 bg-white shadow-xl shadow-slate-900/10 transition-all duration-200 ease-out dark:border-white/[0.07] dark:bg-slate-900 dark:shadow-black/30 ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-1 scale-95 opacity-0"
        }`}
      >
        <div className="max-h-56 overflow-y-auto p-1">
          {options.map((key) => {
            const selected = key === value;

            return (
              <button
                key={key}
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  onChange(key);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-2 rounded px-2 py-1.5 text-left text-[12px] transition-colors ${
                  selected
                    ? "bg-blue-500/10 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/6 dark:hover:text-slate-100"
                }`}
              >
                <span className="truncate">{key}</span>

                {selected && <Check className="h-3.5 w-3.5 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function QuestionView() {
  const [initialSelection] = useState(() => getInitialVideoSelection());

  const [selectedUserId, setSelectedUserId] = useState(initialSelection.userId);
  const [selectedVideoId, setSelectedVideoId] = useState(
    initialSelection.videoId,
  );
  const [currentTimeSec, setCurrentTimeSec] = useState(0);
  const [activePanel, setActivePanel] = useState<"questions" | "json">(
    "questions",
  );
  const [selectedTrajectoryKey, setSelectedTrajectoryKey] = useState<
    string | null
  >(null);

  const selectedUser = USERS.find((u) => u.userId === selectedUserId)!;
  const selectedVideo =
    selectedUser?.videos.find((v) => v.id === selectedVideoId) ??
    selectedUser?.videos[0];

  // Get selected trajectory from the trajectory map
  const selectedTrajectory: TrajectoryData | null = selectedVideo?.trajectory
    ? selectedTrajectoryKey && selectedTrajectoryKey in selectedVideo.trajectory
      ? selectedVideo.trajectory[selectedTrajectoryKey]
      : (Object.values(selectedVideo.trajectory)[0] ?? null)
    : null;

  // Auto-set trajectory key when video changes
  useEffect(() => {
    if (!selectedVideo) {
      setSelectedTrajectoryKey(null);
      return;
    }

    setSelectedTrajectoryKey(
      getInitialTrajectoryKeyForVideo(
        selectedVideo.id,
        selectedVideo.trajectory,
      ),
    );
  }, [selectedVideo?.id]);

  useEffect(() => {
    if (!selectedVideoId || !selectedTrajectoryKey) return;

    const savedByVideo = getSavedTrajectoryByVideo();

    const next = {
      ...savedByVideo,
      [selectedVideoId]: selectedTrajectoryKey,
    };

    localStorage.setItem(
      STORAGE_KEYS.selectedTrajectoryByVideo,
      JSON.stringify(next),
    );
  }, [selectedVideoId, selectedTrajectoryKey]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.selectedVideoId, selectedVideoId);
  }, [selectedVideoId]);

  const handleUserChange = (uid: string) => {
    setSelectedUserId(uid);
    const user = USERS.find((u) => u.userId === uid);
    if (user?.videos[0]) setSelectedVideoId(user.videos[0].id);
    setCurrentTimeSec(0);
  };

  return (
    <div className="flex h-[calc(100vh-77px)] flex-col overflow-hidden bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      {/* 3-column layout */}
      <div
        className="grid min-h-0 flex-1"
        style={{ gridTemplateColumns: "260px 1fr 420px" }}
      >
        {/* Sidebar */}
        <aside className="overflow-y-auto border-r border-slate-200 bg-white dark:border-white/[0.07] dark:bg-slate-950/60">
          <UserVideoSelector
            users={USERS}
            selectedUserId={selectedUserId}
            selectedVideoId={selectedVideoId}
            onUserChange={handleUserChange}
            onVideoChange={(vid) => {
              setSelectedVideoId(vid);
              setCurrentTimeSec(0);
            }}
          />
        </aside>

        {/* Video center */}
        <main className="flex min-h-0 flex-col overflow-hidden border-r border-slate-200 bg-slate-100 dark:border-white/[0.07] dark:bg-black">
          {selectedVideo ? (
            <VideoPlayer
              video={selectedVideo}
              trajectory={selectedTrajectory}
              currentTimeSec={currentTimeSec}
              onTimeChange={setCurrentTimeSec}
            />
          ) : (
            <div className="flex flex-1 items-center justify-center text-sm text-slate-500 dark:text-slate-600">
              No video selected
            </div>
          )}
        </main>

        {/* Right panel */}
        <aside className="flex min-h-0 flex-col overflow-hidden bg-white dark:bg-slate-950/80">
          {/* Tabs */}
          <div className="flex shrink-0 gap-1 border-b border-slate-200 px-4 dark:border-white/[0.07]">
            {(["questions", "json"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActivePanel(tab)}
                className={`border-b-2 px-4 py-3.5 text-[13px] font-medium capitalize transition-all ${
                  activePanel === tab
                    ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-400"
                    : "border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-300"
                }`}
              >
                {tab === "questions" ? (
                  <div className="flex flex-row items-center text-center gap-1">
                    <FileQuestionMark className="h-4 w-4" /> Questions
                  </div>
                ) : (
                  "{ } JSON"
                )}
              </button>
            ))}
          </div>

          {/* Trajectory selector */}
          {selectedVideo?.trajectory &&
            Object.keys(selectedVideo.trajectory).length > 1 && (
              <div className="shrink-0 border-b border-slate-200 px-4 py-3 dark:border-white/[0.07]">
                <label className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                  Trajectory
                </label>
                <TrajectoryDropdown
                  value={selectedTrajectoryKey}
                  options={Object.keys(selectedVideo.trajectory)}
                  onChange={setSelectedTrajectoryKey}
                />
              </div>
            )}

          <div className="flex-1 overflow-y-auto">
            {activePanel === "questions" ? (
              <QuestionPanel
                trajectory={selectedTrajectory}
                currentTimeSec={currentTimeSec}
                onSeek={setCurrentTimeSec}
              />
            ) : (
              <JsonViewer
                data={
                  selectedVideo?.rawJson ??
                  (selectedTrajectory ? selectedTrajectory : null)
                }
              />
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
