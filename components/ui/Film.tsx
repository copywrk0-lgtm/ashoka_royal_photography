"use client"

import { useEffect, useRef, useState } from "react"

let activeVideo: HTMLVideoElement | null = null

export function Film({src,label}:{src:string;label:string}){
  const videoRef = useRef<HTMLVideoElement>(null)
  const [loading,setLoading] = useState(true)
  const [failed,setFailed] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
          if (activeVideo && activeVideo !== video) activeVideo.pause()
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
      {loading && !failed && (
        <div className="film-loading" aria-label={`Loading ${label}`}>
          <div className="film-loading-inner">
            <span className="film-loader" />
            <span className="film-loading-label">{label}</span>
            <span className="film-loading-track">
              <span className="film-loading-progress" />
            </span>
            <span className="film-loading-text">LOADING FILM</span>
          </div>
        </div>
      )}

      {failed && (
        <div className="film-loading film-error" role="status">
          <span>VIDEO UNAVAILABLE</span>
        </div>
      )}

      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        autoPlay\n        preload="auto"
        onLoadedData={() => setLoading(false)}\n        onCanPlay={() => setLoading(false)}
        onError={() => {
          setLoading(false)
          setFailed(true)
        }}
      />

      <div className="film-label">
        <span>{label}</span>
        <span>REEL</span>
      </div>
    </article>
  )
}
