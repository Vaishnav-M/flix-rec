import React, { useState } from 'react'

export default function Card({ movie }) {
  const [hover, setHover] = useState(false)
  return (
    <div
      className="card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={movie.poster} alt={movie.title} loading="lazy" />
      <div className={`card-overlay ${hover ? 'show' : ''}`}>
        <div className="card-title">{movie.title}</div>
        <button className="play-btn" aria-label={`Play ${movie.title}`}>▶</button>
      </div>
    </div>
  )
}
