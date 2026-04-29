import { useEffect, useState } from "react";
import { QuestionPanel } from "../Components/Sections/QuestionPanel";
import { VideoPlayer } from "../Components/Sections/VideoPlayer";
import {
  JsonViewer,
  UserVideoSelector,
} from "../Components/Sections/JsonViewer";
import { USERS } from "../Components/Json/Users";
import type { TrajectoryData } from "../Components/Json/Types";

// ─── Root page ────────────────────────────────────────────────────────────────

export default function QuestionView() {
  const [selectedUserId, setSelectedUserId] = useState(USERS[0].userId);
  const [selectedVideoId, setSelectedVideoId] = useState(USERS[0].videos[0].id);
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
    if (selectedVideo?.trajectory) {
      const keys = Object.keys(selectedVideo.trajectory);
      setSelectedTrajectoryKey(keys[0] ?? null);
    } else {
      setSelectedTrajectoryKey(null);
    }
  }, [selectedVideo?.trajectory]);

  const handleUserChange = (uid: string) => {
    setSelectedUserId(uid);
    const user = USERS.find((u) => u.userId === uid);
    if (user?.videos[0]) setSelectedVideoId(user.videos[0].id);
    setCurrentTimeSec(0);
  };

  useEffect(() => {
    const applyTheme = () => {
      const theme = localStorage.getItem("theme");
      const isDark = theme === "dark";

      document.documentElement.classList.toggle("dark", isDark);
    };

    applyTheme();

    window.addEventListener("storage", applyTheme);
    window.addEventListener("theme-change", applyTheme);

    return () => {
      window.removeEventListener("storage", applyTheme);
      window.removeEventListener("theme-change", applyTheme);
    };
  }, []);

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
                {tab === "questions" ? "🧠 Questions" : "{ } JSON"}
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
                <select
                  value={selectedTrajectoryKey || ""}
                  onChange={(e) => setSelectedTrajectoryKey(e.target.value)}
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-2 py-1.5 text-[12px] text-slate-700 dark:border-white/[0.07] dark:bg-slate-900 dark:text-slate-300"
                >
                  {Object.keys(selectedVideo.trajectory).map((key) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
                </select>
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
