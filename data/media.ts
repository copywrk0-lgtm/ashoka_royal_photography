export const images = Array.from({length: 47}, (_, i) => `/assets/images/${String(i + 1).padStart(2, "0")}.jpg`);

// Git LFS stores pointer files in the repository. Use GitHub's public LFS media
// endpoint so the browser receives the actual MP4 bytes instead of the pointer.
const repoMediaBase = "https://media.githubusercontent.com/media/copywrk0-lgtm/ashoka_royal_photography/main/public/assets/videos";

export const films = Array.from(
  {length: 5},
  (_, i) => `${repoMediaBase}/film-${String(i + 1).padStart(2, "0")}.mp4`,
);
