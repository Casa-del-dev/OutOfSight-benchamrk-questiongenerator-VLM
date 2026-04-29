import type { VideoEntry } from "./Types";

export interface UserEntry {
  userId: string;
  videos: VideoEntry[];
}

type VideoModule = {
  VIDEO: VideoEntry;
};

const videoModules = import.meta.glob<VideoModule>("./P*/**/*.tsx", {
  eager: true,
});

export function buildUsers(): UserEntry[] {
  const usersById: Record<string, VideoEntry[]> = {};

  for (const [path, module] of Object.entries(videoModules)) {
    const match = path.match(/\.\/(P\d{2})\//);

    if (!match) continue;

    const userId = match[1];

    // Only include P01 through P10
    const userNumber = Number(userId.slice(1));
    if (userNumber < 1 || userNumber > 10) continue;

    if (!usersById[userId]) {
      usersById[userId] = [];
    }

    usersById[userId].push(module.VIDEO);
  }

  return Object.entries(usersById)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([userId, videos]) => ({
      userId,
      videos,
    }));
}

export const USERS: UserEntry[] = buildUsers();
