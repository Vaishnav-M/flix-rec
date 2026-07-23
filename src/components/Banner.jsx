import React from 'react'

export default function Banner({ movie }) {
  return (
    <section className="banner" style={{ backgroundImage: `url(${movie.backdrop})` }}>
      <div className="banner-fade" />
      <div className="banner-content">
        <h1 className="banner-title">{movie.title}</h1>
        <p className="banner-desc">{movie.overview}</p>
        <div className="banner-buttons">
          <button className="btn play">▶ Play</button>
          <button className="btn info">ℹ More Info</button>
        </div>
      </div>
    </section>
  )
}
