export const images=Array.from({length:47},(_,i)=>`/assets/images/${String(i+1).padStart(2,'0')}.jpg`);

// Videos are stored in Git LFS. Vercel must have Git LFS enabled so the
// deployment pulls the real MP4 bytes instead of serving LFS pointer files.
export const films=Array.from({length:5},(_,i)=>`/assets/videos/film-${String(i+1).padStart(2,'0')}.mp4`);
