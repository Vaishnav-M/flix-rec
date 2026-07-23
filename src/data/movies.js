// Use local SVG posters stored in public/posters/
const poolSize = 12
const sample = (id, idx) => ({
  id,
  title: `Movie ${id}`,
  poster: `/posters/poster${idx % poolSize}.jpg`,
  backdrop: `/posters/back${idx % poolSize}.jpg`,
  overview:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.'
})

const makeList = (prefix, count = 10) =>
  Array.from({ length: count }).map((_, i) => sample(`${prefix}${i}`, i))

const movies = {
  featured: {
    id: 'featured',
    title: 'Featured Movie',
    poster: '/posters/featured.svg',
    backdrop: '/posters/back_featured.svg',
    overview:
      'A featured film with dramatic visuals and an immersive story. Enjoy the adventure.'
  },
  trending: makeList('t'),
  topRated: makeList('r'),
  action: makeList('a'),
  comedy: makeList('c')
}

export default movies
