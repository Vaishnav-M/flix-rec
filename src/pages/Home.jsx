import React from 'react'
import Banner from '../components/Banner'
import Row from '../components/Row'
import movies from '../data/movies'

export default function Home() {
  const { featured, trending, topRated, action, comedy } = movies
  const withoutFeatured = (list) => list.filter((m) => m.id !== featured.id && m.title !== featured.title)

  return (
    <>
      <Banner movie={featured} />
      <main className="content">
        <Row title="Trending Now" movies={withoutFeatured(trending)} />
        <Row title="Top Rated" movies={withoutFeatured(topRated)} />
        <Row title="Action Movies" movies={withoutFeatured(action)} />
        <Row title="Comedy Movies" movies={withoutFeatured(comedy)} />
      </main>
    </>
  )
}
