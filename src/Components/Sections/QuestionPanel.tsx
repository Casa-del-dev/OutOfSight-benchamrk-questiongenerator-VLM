import { useState } from "react";
import type { TrajectoryData, Step, BranchStep } from "../Json/Types";

interface QuestionPanelProps {
  trajectory: TrajectoryData | null | undefined;
  currentTimeSec: number;
  onSeek: (t: number) => void;
}

const CLASS_CONFIG: Record<
  string,
  {
    label: string;
    color: string;
    bg: string;
    text: string;
    border: string;
  }
> = {
  oos_step1_visibility: {
    label: "Visibility",
    color: "#60a5fa",
    bg: "bg-blue-500/10",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-500/20",
  },
  oos_step2_last_visible: {
    label: "Last Visible",
    color: "#a78bfa",
    bg: "bg-violet-500/10",
    text: "text-violet-600 dark:text-violet-400",
    border: "border-violet-500/20",
  },
  oos_step3_last_placement: {
    label: "Last Placement",
    color: "#fbbf24",
    bg: "bg-amber-500/10",
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-500/20",
  },
  oos_step4_fixture: {
    label: "Nearest Fixture",
    color: "#34d399",
    bg: "bg-emerald-500/10",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-500/20",
  },
  oos_branch_object_camera_relative_position: {
    label: "Camera Direction",
    color: "#f87171",
    bg: "bg-red-500/10",
    text: "text-red-600 dark:text-red-400",
    border: "border-red-500/20",
  },
  oos_branch_object_object_relation: {
    label: "Object Relation",
    color: "#f472b6",
    bg: "bg-pink-500/10",
    text: "text-pink-600 dark:text-pink-400",
    border: "border-pink-500/20",
  },
  oos_branch_object_object_distance: {
    label: "Distance",
    color: "#2dd4bf",
    bg: "bg-teal-500/10",
    text: "text-teal-600 dark:text-teal-400",
    border: "border-teal-500/20",
  },
};

const DEFAULT_CONFIG = {
  label: "Question",
  color: "#94a3b8",
  bg: "bg-slate-500/10",
  text: "text-slate-600 dark:text-slate-400",
  border: "border-slate-500/20",
};

function QuestionText({ text }: { text: string }) {
  const parts = text.split(/(<TIME[^>]*>)/g);

  return (
    <p className="m-0 text-[13px] leading-relaxed text-slate-800 dark:text-slate-200">
      {parts.map((part, i) =>
        part.startsWith("<TIME") ? (
          <code
            key={i}
            className="mx-0.5 rounded bg-blue-500/10 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-300"
          >
            {part}
          </code>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  );
}

function QuestionCard({
  step,
  isBranch,
  onSeek,
}: {
  step: Step | BranchStep;
  isBranch?: boolean;
  onSeek: (t: number) => void;
}) {
  const [showAnswer, setShowAnswer] = useState(false);

  const question = Array.isArray(step.question)
    ? step.question[0]
    : step.question;

  const meta = step.answer_metadata;
  const cfg = CLASS_CONFIG[step.question_class] ?? DEFAULT_CONFIG;

  const seekTime =
    meta.sampled_last_visible_time_sec ?? meta.last_placement_time_sec ?? null;

  const answerSummaryLines: string[] = [];

  if (meta.sampled_last_visible_time_token) {
    answerSummaryLines.push(
      `Last visible: ${meta.sampled_last_visible_time_token}`,
    );
  }

  if (meta.last_placement_time_token) {
    answerSummaryLines.push(`Stopped at: ${meta.last_placement_time_token}`);
  }

  if (meta.correct_fixture) {
    answerSummaryLines.push(`Fixture: ${meta.correct_fixture}`);
  }

  if (meta.correct_label) {
    answerSummaryLines.push(`Direction: ${meta.correct_label}`);
  }

  if (meta.distance_bucket) {
    answerSummaryLines.push(
      `Distance: ${meta.distance_bucket}${
        meta.distance_m ? ` (${meta.distance_m.toFixed(2)} m)` : ""
      }`,
    );
  }

  if (meta.normalized_projected_pixel) {
    const px = meta.normalized_projected_pixel as number[];
    answerSummaryLines.push(
      `Pixel (norm): [${px.map((v) => v.toFixed(3)).join(", ")}]`,
    );
  }

  return (
    <div className="mb-3 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-white/[0.07] dark:bg-slate-900/60">
      {/* Header */}
      <div className="flex items-center gap-2.5 border-b border-slate-200 px-3.5 py-2.5 dark:border-white/5">
        <div
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border text-[11px] font-bold ${cfg.bg} ${cfg.text} ${cfg.border}`}
        >
          {isBranch ? "B" : `S${step.step}`}
        </div>

        <div className="min-w-0 flex-1">
          <span
            className={`text-[10px] font-bold uppercase tracking-widest ${cfg.text}`}
          >
            {cfg.label}
          </span>
        </div>

        {seekTime !== null && (
          <button
            onClick={() => onSeek(seekTime)}
            className="flex items-center gap-1 rounded-md border border-blue-500/20 bg-blue-500/10 px-2 py-1 text-[11px] font-semibold text-blue-700 transition-colors hover:bg-blue-500/15 dark:text-blue-400 dark:hover:bg-blue-500/20"
          >
            <span>⏱</span>
            <span>{seekTime}s</span>
          </button>
        )}
      </div>

      {/* Body */}
      <div className="px-3.5 py-3">
        <QuestionText text={question} />

        {step.choices.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {step.choices.map((choice, ci) => {
              const isCorrect = ci === step.correct_idx;
              const isAcceptable = step.acceptable_idxs?.includes(ci);
              const isHighlighted = showAnswer && (isCorrect || isAcceptable);

              return (
                <div
                  key={ci}
                  className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[12px] font-medium transition-colors duration-200 ${
                    isHighlighted
                      ? "border-emerald-500/40 bg-emerald-500/20 text-emerald-1000 dark:bg-emerald-500/15 dark:text-emerald-300"
                      : "border-slate-200 bg-slate-100 text-slate-600 dark:border-white/8 dark:bg-slate-800/60 dark:text-slate-400"
                  }`}
                >
                  {isHighlighted && <span className="text-[10px]">✓</span>}
                  {choice}
                </div>
              );
            })}
          </div>
        )}

        {showAnswer &&
          step.correct_idx === null &&
          answerSummaryLines.length > 0 && (
            <div className="mt-3 rounded-lg border border-emerald-500/25 bg-emerald-500/10 p-2.5">
              {answerSummaryLines.map((line, i) => (
                <div
                  key={i}
                  className="text-[12px] leading-relaxed text-emerald-700 dark:text-emerald-300"
                >
                  {line}
                </div>
              ))}
            </div>
          )}
      </div>

      {/* Toggle footer */}
      <div className="border-t border-slate-200 px-3.5 py-2 dark:border-white/5">
        <button
          onClick={() => setShowAnswer((s) => !s)}
          className="flex items-center gap-1.5 text-[12px] font-medium text-slate-500 transition-colors hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-300"
        >
          <span className="text-[11px]">{showAnswer ? "🙈" : "👁"}</span>
          {showAnswer ? "Hide answer" : "Reveal answer"}
        </button>
      </div>
    </div>
  );
}

export function QuestionPanel({
  trajectory,
  currentTimeSec: _currentTimeSec,
  onSeek,
}: QuestionPanelProps) {
  if (!trajectory) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 text-slate-400 dark:text-slate-600">
        <span className="text-4xl">📭</span>
        <p className="text-sm">No trajectory data for this video</p>
      </div>
    );
  }

  const allBranch = Object.values(trajectory.branch_groups).flat();

  return (
    <div className="p-4">
      {/* Trajectory header */}
      <div className="mb-5">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-600">
          Trajectory · {trajectory.question_class}
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 text-[11px] font-medium text-blue-700 dark:bg-blue-500/15 dark:text-blue-400">
            {trajectory.object_a_name}
          </span>

          <span className="rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600 dark:border-white/[0.07] dark:bg-slate-800 dark:text-slate-400">
            query @ {trajectory.query_time_sec}s
          </span>

          <span className="rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-500 dark:border-white/[0.07] dark:bg-slate-800 dark:text-slate-500">
            {trajectory.trajectory_id}
          </span>
        </div>
      </div>

      {/* Incremental steps */}
      <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-600">
        Incremental Steps
      </p>

      {trajectory.incremental_steps.map((step) => (
        <QuestionCard key={`step-${step.step}`} step={step} onSeek={onSeek} />
      ))}

      {/* Branch questions */}
      {allBranch.length > 0 && (
        <>
          <p className="mb-3 mt-6 text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-600">
            Branch Questions
          </p>

          {allBranch.map((step) => (
            <QuestionCard
              key={`branch-${step.step}`}
              step={step}
              isBranch
              onSeek={onSeek}
            />
          ))}
        </>
      )}
    </div>
  );
}
