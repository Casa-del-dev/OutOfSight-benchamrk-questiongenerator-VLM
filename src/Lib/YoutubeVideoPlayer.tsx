export function getYouTubeId(url: string | null): string | null {
  if (!url) return null;

  const regExp =
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([^&?/]+)/;

  const match = url.match(regExp);
  return match?.[1] ?? null;
}
