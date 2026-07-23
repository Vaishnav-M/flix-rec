import React, { useRef } from 'react'
import Card from './Card'

export default function Row({ title, movies }) {
  const ref = useRef(null)
  const scroll = (dir) => {
    if (!ref.current) return
    ref.current.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <section className="row">
      <div className="row-header">
        <h2 className="row-title">{title}</h2>
        <div className="row-actions">
          <button className="chev" onClick={() => scroll(-1)} aria-label="Scroll left">‹</button>
          <button className="chev" onClick={() => scroll(1)} aria-label="Scroll right">›</button>
        </div>
      </div>
      <div className="row-posters" ref={ref}>
        {movies.map((m) => (
          <Card key={m.id} movie={m} />
        ))}
      </div>
    </section>
  )
}
