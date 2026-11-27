"use client"

import { useState } from "react"

export function Film({src,label}:{src:string;label:string}){
  const [loading,setLoading]=useState(true)

  return (
    <div className="film-card">
      {loading && (
        <div className="film-loading" aria-label="Loading video">
          <span className="film-loader" />
        </div>
      )}
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={() => setLoading(false)}
        onCanPlay={() => setLoading(false)}
      />
      <div className="film-label">
        <span>{label}</span>
        <span>PLAYING</span>
      </div>
    </div>
  )
}
