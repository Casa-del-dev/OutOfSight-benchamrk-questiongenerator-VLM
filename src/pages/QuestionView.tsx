"use client";

import { useState } from "react";
import { QuestionPanel } from "../Components/Sections/QuestionPanel";
import { VideoPlayer } from "../Components/Sections/VideoPlayer";
import {
  JsonViewer,
  UserVideoSelector,
} from "../Components/Sections/JsonViewer";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AnswerMetadata {
  projected_pixel?: [number, number] | null;
  normalized_projected_pixel?: [number, number] | null;
  sampled_last_visible_time_sec?: number;
  sampled_last_visible_time_token?: string;
  last_placement_time_sec?: number;
  last_placement_time_token?: string;
  correct_fixture?: string;
  correct_label?: string;
  distance_bucket?: string;
  distance_m?: number;
  object_y_projected_pixel?: [number, number];
  object_y_name?: string;
  [key: string]: unknown;
}

export interface Step {
  step: number | string;
  question_class: string;
  question: string | string[];
  choices: string[];
  correct_idx: number | null;
  acceptable_idxs?: number[];
  answer_metadata: AnswerMetadata;
  skipped?: boolean;
}

export interface BranchStep extends Step {
  depends_on_steps: number[];
  branch_group: string;
}

export interface TrajectoryData {
  video_id: string;
  object_a_name: string;
  query_time_sec: number;
  clip_start_time_sec: number;
  clip_end_time_sec: number;
  horizon_sec: number;
  question_class: string;
  trajectory_id: string;
  incremental_steps: Step[];
  branch_groups: Record<string, BranchStep[]>;
  generation_info: {
    oos_span_start_sec: number;
    oos_span_end_sec: number;
    fixture_at_query: string;
    [key: string]: unknown;
  };
}

export interface VideoEntry {
  id: string;
  label: string;
  sampledUrl: string | null;
  fullUrl: string | null;
  duration?: number;
  trajectory?: TrajectoryData;
  rawJson?: Record<string, unknown>;
}

export interface UserEntry {
  userId: string;
  label: string;
  videos: VideoEntry[];
}

// ─── Demo data ────────────────────────────────────────────────────────────────

const SAMPLE_TRAJECTORY: TrajectoryData = {
  video_id: "P01-20240202-110250",
  object_a_name: "mug",
  query_time_sec: 69.0,
  clip_start_time_sec: 61.0,
  clip_end_time_sec: 69.0,
  horizon_sec: 5.0,
  question_class: "oos_staged_trajectory",
  trajectory_id: "oos_staged_h5p0_0",
  incremental_steps: [
    {
      step: 1,
      question_class: "oos_step1_visibility",
      question:
        "At the current time <TIME 00:01:09.0 video 1>, is the previously moved mug visible in the current frame?",
      choices: ["No", "Yes"],
      correct_idx: 0,
      answer_metadata: {
        status: "out_of_view",
        is_visible: false,
        frame_index: 438,
      },
    },
    {
      step: 2,
      question_class: "oos_step2_last_visible",
      question:
        "When was the previously moved mug last visible, and where was it located in the image at that moment?",
      choices: [],
      correct_idx: null,
      answer_metadata: {
        sampled_last_visible_time_sec: 63.0,
        sampled_last_visible_time_token: "<TIME 00:01:03.0 video 1>",
        projected_pixel: [141.6, 1110.6],
        normalized_projected_pixel: [0.1006, 0.7887],
        fixture: "P01_counter.001",
      },
    },
    {
      step: "3",
      question_class: "oos_step3_last_placement",
      question:
        "At what time did the previously moved mug stop moving? Where was it located in the image at that moment?",
      choices: [],
      correct_idx: null,
      answer_metadata: {
        last_placement_time_sec: 14.6,
        last_placement_time_token: "<TIME 00:00:14.6 video 1>",
        projected_pixel: [835.2, 1169.2],
        normalized_projected_pixel: [0.5932, 0.8304],
        fixture: "P01_counter.001",
      },
    },
    {
      step: 4,
      question_class: "oos_step4_fixture",
      question:
        "At the current time <TIME 00:01:09.0 video 1>, based on the last known position of the mug that was moved earlier, which fixture is closest to it?",
      choices: ["drawer", "counter", "shelf", "cupboard", "bin"],
      correct_idx: 1,
      answer_metadata: {
        correct_fixture: "counter",
        raw_correct_fixture: "P01_counter.001",
      },
    },
  ],
  branch_groups: {
    post_step3: [
      {
        step: "5a",
        depends_on_steps: [1, 2, 3, 4],
        branch_group: "post_step4",
        question_class: "oos_branch_object_camera_relative_position",
        question:
          "At the current time <TIME 00:01:09.0 video 1>, the mug that was moved earlier is not visible. Based on its last known position, in which direction is the mug from your viewpoint?",
        choices: ["Back-right", "Front-right", "Back-left", "Front-left"],
        correct_idx: 0,
        answer_metadata: { correct_label: "Back-right" },
      },
      {
        step: "5b",
        depends_on_steps: [1, 2, 3, 4],
        branch_group: "post_step4",
        question_class: "oos_branch_object_object_relation",
        question:
          "At the current time <TIME 00:01:09.0 video 1>, the mug is not visible. Where is it relative to the plug of food processor from your viewpoint?",
        choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
        correct_idx: 3,
        acceptable_idxs: [3],
        answer_metadata: {
          object_y_projected_pixel: [749.3, 1134.1],
          object_y_name: "plug of food processor",
        },
      },
      {
        step: "5c",
        depends_on_steps: [1, 2, 3, 4],
        branch_group: "post_step4",
        question_class: "oos_branch_object_object_distance",
        question:
          "At the current time <TIME 00:01:09.0 video 1>, how far is the mug from the plug of food processor?",
        choices: ["close", "medium", "far", "very close"],
        correct_idx: 1,
        answer_metadata: { distance_bucket: "medium", distance_m: 1.866 },
      },
    ],
  },
  generation_info: {
    oos_span_start_sec: 64.0,
    oos_span_end_sec: 134.0,
    fixture_at_query: "P01_counter.001",
  },
};

export const DEMO_USERS: UserEntry[] = [
  {
    userId: "P01",
    label: "Participant 01",
    videos: [
      {
        id: "P01-20240202-110250",
        label: "P01 — 2024-02-02 11:02",
        sampledUrl:
          "https://www.youtube.com/watch?v=49EiUzdzwfk&list=PLN5Krxli5ta_d_Q5sTa1HjuDrF1ATvciV&index=29",
        fullUrl:
          "https://www.youtube.com/watch?v=49EiUzdzwfk&list=PLN5Krxli5ta_d_Q5sTa1HjuDrF1ATvciV&index=29",
        duration: 220,
        trajectory: SAMPLE_TRAJECTORY,
        rawJson: { oos_staged_h5p0_0: SAMPLE_TRAJECTORY },
      },
      {
        id: "P01-20240203-093012",
        label: "P01 — 2024-02-03 09:30",
        sampledUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        fullUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        duration: 180,
      },
    ],
  },
  {
    userId: "P02",
    label: "Participant 02",
    videos: [
      {
        id: "P02-20240204-140000",
        label: "P02 — 2024-02-04 14:00",
        sampledUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        fullUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        duration: 300,
      },
    ],
  },
];

// ─── Root page ────────────────────────────────────────────────────────────────

export default function QuestionView() {
  const [isDark, setIsDark] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState(DEMO_USERS[0].userId);
  const [selectedVideoId, setSelectedVideoId] = useState(
    DEMO_USERS[0].videos[0].id,
  );
  const [currentTimeSec, setCurrentTimeSec] = useState(0);
  const [activePanel, setActivePanel] = useState<"questions" | "json">(
    "questions",
  );

  const selectedUser = DEMO_USERS.find((u) => u.userId === selectedUserId)!;
  const selectedVideo =
    selectedUser?.videos.find((v) => v.id === selectedVideoId) ??
    selectedUser?.videos[0];

  const handleUserChange = (uid: string) => {
    setSelectedUserId(uid);
    const user = DEMO_USERS.find((u) => u.userId === uid);
    if (user?.videos[0]) setSelectedVideoId(user.videos[0].id);
    setCurrentTimeSec(0);
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="flex flex-col h-screen overflow-hidden bg-slate-950 text-slate-100 dark:bg-slate-950 dark:text-slate-100">
        {/* Nav */}
        <nav className="flex items-center justify-between px-8 h-14 border-b border-white/[0.07] bg-slate-950/90 backdrop-blur-xl shrink-0 z-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-500 to-violet-600 flex items-center justify-center text-[11px] font-bold text-white shadow-lg shadow-blue-500/25">
              OoS
            </div>
            <span className="font-semibold text-[15px] tracking-tight text-white">
              Out<span className="text-blue-400 italic">Of</span>Sight
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 font-medium border border-blue-500/20">
              Question Viewer
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/"
              className="text-[13px] text-slate-400 hover:text-slate-200 transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
            >
              ← Home
            </a>
            <button
              onClick={() => setIsDark((d) => !d)}
              className="w-9 h-9 rounded-lg bg-white/6 hover:bg-white/10 border border-white/8 flex items-center justify-center text-base transition-all hover:scale-105"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>
        </nav>

        {/* 3-column layout */}
        <div
          className="flex-1 min-h-0 grid"
          style={{ gridTemplateColumns: "260px 1fr 420px" }}
        >
          {/* Sidebar */}
          <aside className="border-r border-white/[0.07] overflow-y-auto bg-slate-950/60">
            <UserVideoSelector
              users={DEMO_USERS}
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
          <main className="border-r border-white/[0.07] flex flex-col min-h-0 overflow-hidden bg-black">
            {selectedVideo ? (
              <VideoPlayer
                video={selectedVideo}
                currentTimeSec={currentTimeSec}
                onTimeChange={setCurrentTimeSec}
              />
            ) : (
              <div className="flex-1 flex items-center justify-center text-slate-600 text-sm">
                No video selected
              </div>
            )}
          </main>

          {/* Right panel */}
          <aside className="flex flex-col min-h-0 overflow-hidden bg-slate-950/80">
            {/* Tabs */}
            <div className="flex border-b border-white/[0.07] px-4 gap-1 shrink-0">
              {(["questions", "json"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActivePanel(tab)}
                  className={`px-4 py-3.5 text-[13px] font-medium border-b-2 transition-all capitalize ${
                    activePanel === tab
                      ? "text-blue-400 border-blue-500"
                      : "text-slate-500 border-transparent hover:text-slate-300"
                  }`}
                >
                  {tab === "questions" ? "🧠 Questions" : "{ } JSON"}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto">
              {activePanel === "questions" ? (
                <QuestionPanel
                  trajectory={selectedVideo?.trajectory ?? null}
                  currentTimeSec={currentTimeSec}
                  onSeek={setCurrentTimeSec}
                />
              ) : (
                <JsonViewer
                  data={
                    selectedVideo?.rawJson ??
                    (selectedVideo?.trajectory
                      ? { oos_staged_h5p0_0: selectedVideo.trajectory }
                      : null)
                  }
                />
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
