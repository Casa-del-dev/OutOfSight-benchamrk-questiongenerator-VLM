import type { TrajectoryData, VideoEntry } from "./Types";

const TRAJECTORY: Record<string, TrajectoryData> = {};

export const VIDEO: VideoEntry = {
  id: "",
  label: "",
  sampledUrl:
    "https://www.youtube.com/watch?v=dX1WtAax4zY&list=PLN5Krxli5ta_d_Q5sTa1HjuDrF1ATvciV&index=19",
  fullUrl:
    "https://www.youtube.com/watch?v=dX1WtAax4zY&list=PLN5Krxli5ta_d_Q5sTa1HjuDrF1ATvciV&index=19",
  duration: 0,
  trajectory: TRAJECTORY,
  rawJson: { TRAJECTORY },
};
