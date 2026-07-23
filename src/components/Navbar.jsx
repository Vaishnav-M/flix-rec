import React from 'react'

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-left">
        <div className="logo">FLIXREC</div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Movies</a>
          <a href="#">Series</a>
          <a href="#">My List</a>
        </nav>
      </div>
      <div className="nav-right">
        <button className="profile" aria-label="Profile">👤</button>
      </div>
    </header>
  )
}
