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
  world_coordinates?: [number, number, number];
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
  [key: string]: unknown;
}

export type TrajectoryMap = Record<string, TrajectoryData>;

export interface VideoEntry {
  id: string;
  label: string;
  sampledUrl: string | null;
  fullUrl: string | null;
  duration?: number;
  trajectory?: TrajectoryMap;
  rawJson?: Record<string, unknown>;
}

export interface UserEntry {
  userId: string;
  videos: VideoEntry[];
}
