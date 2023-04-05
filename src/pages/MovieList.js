import React, { useEffect } from 'react'
import { useState } from 'react'

import MovieCard from '../components/MovieCard'

const MovieList = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    async function getMovies() {
      const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      const data = await res.json();
      setMovies(data?.results)
    }
    getMovies();
  }, [])
  return (
    <section className=' max-w-7xl mx-auto px-4'>
      {movies?.length > 0 ? (
        <div className=' flex flex-wrap justify-start gap-2 item pt-4 items-center'>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  )
}

export default MovieList