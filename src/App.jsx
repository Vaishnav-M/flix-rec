import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Row from './components/Row'
import movies from './data/movies'

export default function App() {
  const { featured, trending, topRated, action, comedy } = movies

  const withoutFeatured = (list) => list.filter((m) => m.id !== featured.id && m.title !== featured.title)

  return (
    <div className="app">
      <Navbar />
      <Banner movie={featured} />
      <main className="content">
        <Row title="Trending Now" movies={withoutFeatured(trending)} />
        <Row title="Top Rated" movies={withoutFeatured(topRated)} />
        <Row title="Action Movies" movies={withoutFeatured(action)} />
        <Row title="Comedy Movies" movies={withoutFeatured(comedy)} />
      </main>
    </div>
  )
}
