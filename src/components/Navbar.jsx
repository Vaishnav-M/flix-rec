import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-left">
        <div className="logo">FLIXREC</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/series">Series</Link>
          <Link to="/my-list">My List</Link>
        </nav>
      </div>
      <div className="nav-right">
        <button className="profile" aria-label="Profile">👤</button>
      </div>
    </header>
  )
}
