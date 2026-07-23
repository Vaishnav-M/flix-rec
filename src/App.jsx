import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Row from './components/Row'
import movies from './data/movies'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner movie={movies.featured} />
      <main className="content">
        <Row title="Trending Now" movies={movies.trending} />
        <Row title="Top Rated" movies={movies.topRated} />
        <Row title="Action Movies" movies={movies.action} />
        <Row title="Comedy Movies" movies={movies.comedy} />
      </main>
    </div>
  )
}
