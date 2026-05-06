// Components/Camera/TrackingCamera.ts
import type { DeviceCalibration, FramewiseInfo, TrackingEntry } from "./Types";

const calibrationModules = import.meta.glob<DeviceCalibration>(
  "./P*/P*/device_calibration.json",
  {
    import: "default",
  },
);

const framewiseModules = import.meta.glob<string>(
  "./P*/P*/framewise_info.jsonl",
  {
    query: "?raw",
    import: "default",
  },
);

function parseTrackingPath(path: string) {
  const match = path.match(/\.\/(P\d{2})\/([^/]+)\//);
  if (!match) return null;

  return {
    userId: match[1],
    videoId: match[2],
  };
}

function parseJsonl(raw: string): FramewiseInfo[] {
  return raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => JSON.parse(line) as FramewiseInfo);
}

const calibrationByVideoId: Record<string, () => Promise<DeviceCalibration>> =
  {};

const framewiseByVideoId: Record<string, () => Promise<string>> = {};

for (const [path, loader] of Object.entries(calibrationModules)) {
  const parsed = parseTrackingPath(path);
  if (!parsed) continue;

  calibrationByVideoId[parsed.videoId] =
    loader as () => Promise<DeviceCalibration>;
}

for (const [path, loader] of Object.entries(framewiseModules)) {
  const parsed = parseTrackingPath(path);
  if (!parsed) continue;

  framewiseByVideoId[parsed.videoId] = loader as () => Promise<string>;
}

export const TRACKING_VIDEO_IDS = Object.keys(calibrationByVideoId).filter(
  (videoId) => videoId in framewiseByVideoId,
);

export async function loadTrackingForVideo(
  videoId: string,
): Promise<TrackingEntry | null> {
  const calibrationLoader = calibrationByVideoId[videoId];
  const framewiseLoader = framewiseByVideoId[videoId];

  if (!calibrationLoader || !framewiseLoader) {
    return null;
  }

  const [deviceCalibration, rawFramewise] = await Promise.all([
    calibrationLoader(),
    framewiseLoader(),
  ]);

  const userId = videoId.slice(0, 3);

  return {
    userId,
    videoId,
    deviceCalibration,
    framewiseInfo: parseJsonl(rawFramewise),
  };
}
