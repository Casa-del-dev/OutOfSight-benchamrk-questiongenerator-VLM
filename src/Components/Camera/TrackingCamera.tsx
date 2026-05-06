import type { DeviceCalibration, FramewiseInfo, TrackingEntry } from "./Types";

const calibrationModules = import.meta.glob<DeviceCalibration>(
  "./P*/P*/device_calibration.json",
  {
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

type FramewiseManifest = {
  userId: string;
  videoId: string;
  source: string;
  maxPartBytes: number;
  totalLines: number;
  parts: {
    file: string;
    bytes: number;
    lines: number;
  }[];
};

const calibrationByVideoId: Record<string, () => Promise<DeviceCalibration>> =
  {};

for (const [path, loader] of Object.entries(calibrationModules)) {
  const parsed = parseTrackingPath(path);
  if (!parsed) continue;

  calibrationByVideoId[parsed.videoId] =
    loader as () => Promise<DeviceCalibration>;
}

async function fetchText(url: string): Promise<string> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

async function loadFramewiseInfo(
  userId: string,
  videoId: string,
): Promise<FramewiseInfo[]> {
  const baseUrl = `/Camera/${userId}/${videoId}/framewise_info`;
  const manifestUrl = `${baseUrl}/manifest.json`;

  const manifest = await fetchJson<FramewiseManifest>(manifestUrl);

  const rawParts = await Promise.all(
    manifest.parts.map((part) => fetchText(`${baseUrl}/${part.file}`)),
  );

  return rawParts.flatMap(parseJsonl);
}

export const TRACKING_VIDEO_IDS = Object.keys(calibrationByVideoId);

export async function loadTrackingForVideo(
  videoId: string,
): Promise<TrackingEntry | null> {
  const calibrationLoader = calibrationByVideoId[videoId];

  if (!calibrationLoader) {
    return null;
  }

  const userId = videoId.slice(0, 3);

  try {
    const [deviceCalibration, framewiseInfo] = await Promise.all([
      calibrationLoader(),
      loadFramewiseInfo(userId, videoId),
    ]);

    return {
      userId,
      videoId,
      deviceCalibration,
      framewiseInfo,
    };
  } catch (err) {
    console.error("Failed to load tracking data", {
      videoId,
      err,
    });

    return null;
  }
}
