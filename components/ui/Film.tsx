"use client"

import { useEffect, useRef, useState } from "react"

let activeVideo: HTMLVideoElement | null = null

export function Film({src,label}:{src:string;label:string}){
  const videoRef = useRef<HTMLVideoElement>(null)
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
          if (activeVideo && activeVideo !== video) {
            activeVideo.pause()
          }
          activeVideo = video
          video.play().catch(() => {})
        } else if (activeVideo === video) {
          video.pause()
          activeVideo = null
        }
      },
      { threshold: [0, 0.55, 1] }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
      if (activeVideo === video) {
        video.pause()
        activeVideo = null
      }
    }
  }, [])

  return (
    <article className="film-card">
      {loading && (
        <div className="film-loading" aria-label="Loading video">
          <span className="film-loader" />
        </div>
      )}

      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={() => setLoading(false)}
        onCanPlay={() => setLoading(false)}
        onError={() => setLoading(false)}
      />

      <div className="film-label">
        <span>{label}</span>
        <span>REEL</span>
      </div>
    </article>
  )
}
