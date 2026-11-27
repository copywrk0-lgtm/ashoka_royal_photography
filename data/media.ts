export const images=Array.from({length:47},(_,i)=>`/assets/images/${String(i+1).padStart(2,'0')}.jpg`);

// The MP4s are stored in Git LFS. Vercel serves the LFS pointer file from
// public/, not the underlying video bytes, so the browser receives a tiny
// text pointer instead of an MP4. Use GitHub's LFS media endpoint for the
// actual video bytes.
const GITHUB_LFS_MEDIA = 'https://media.githubusercontent.com/media/copywrk0-lgtm/ashoka_royal_photography/main/public/assets/videos';

export const films=Array.from({length:5},(_,i)=>`${GITHUB_LFS_MEDIA}/film-${String(i+1).padStart(2,'0')}.mp4`);
