import type { DeviceCalibration, FramewiseInfo, TrackingEntry } from "./Types";

const calibrationModules = import.meta.glob<DeviceCalibration>(
  "./P*/P*/device_calibration.json",
  {
    eager: true,
    import: "default",
  },
);

const framewiseRawModules = import.meta.glob<string>(
  "./P*/P*/framewise_info.jsonl",
  {
    eager: true,
    query: "?raw",
    import: "default",
  },
);

function parseTrackingPath(path: string) {
  const match = path.match(/\.\/(P\d{2})\/([^/]+)\//);

  if (!match) {
    console.warn("[TrackingData] path did not match", path);
    return null;
  }

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
    .map((line, index) => {
      try {
        return JSON.parse(line) as FramewiseInfo;
      } catch (err) {
        console.error("[TrackingData] bad JSONL line", {
          index,
          line,
          err,
        });
        throw err;
      }
    });
}

export function buildTrackingEntries(): TrackingEntry[] {
  const byVideoId: Record<string, Partial<TrackingEntry>> = {};

  for (const [path, calibration] of Object.entries(calibrationModules)) {
    const parsed = parseTrackingPath(path);
    if (!parsed) continue;

    const { userId, videoId } = parsed;

    byVideoId[videoId] ??= {
      userId,
      videoId,
    };

    byVideoId[videoId].deviceCalibration = calibration;
  }

  for (const [path, rawFramewise] of Object.entries(framewiseRawModules)) {
    const parsed = parseTrackingPath(path);
    if (!parsed) continue;

    const { userId, videoId } = parsed;

    byVideoId[videoId] ??= {
      userId,
      videoId,
    };

    byVideoId[videoId].framewiseInfo = parseJsonl(rawFramewise);
  }

  const entries = Object.values(byVideoId)
    .filter((entry): entry is TrackingEntry => {
      const keep = Boolean(
        entry.userId &&
        entry.videoId &&
        entry.deviceCalibration &&
        entry.framewiseInfo,
      );

      if (!keep) {
        console.warn("[TrackingData] incomplete tracking entry dropped", entry);
      }

      return keep;
    })
    .sort((a, b) => {
      if (a.userId !== b.userId) return a.userId.localeCompare(b.userId);
      return a.videoId.localeCompare(b.videoId);
    });

  return entries;
}

export const TRACKING_ENTRIES = buildTrackingEntries();

export const TRACKING_BY_VIDEO_ID: Record<string, TrackingEntry> =
  Object.fromEntries(TRACKING_ENTRIES.map((entry) => [entry.videoId, entry]));
