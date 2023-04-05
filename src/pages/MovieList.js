import React, { useEffect } from 'react'
import { useState } from 'react'

import MovieCard from '../components/MovieCard'
import useFetch from '../hooks/useFetch'

const MovieList = ({ urlPath }) => {
  const { movies } = useFetch(urlPath)

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