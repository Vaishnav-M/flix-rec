import React from 'react'
import movies from '../data/movies'
import Row from '../components/Row'

export default function Movies() {
  return (
    <div style={{ padding: '24px' }}>
      <h1>Movies</h1>
      <p>Browse by category:</p>
      <Row title="Action" movies={movies.action} />
      <Row title="Comedy" movies={movies.comedy} />
    </div>
  )
}
