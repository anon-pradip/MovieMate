import React from 'react'
import { useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import MovieCard from '../components/MovieCard'
// https://api./

const Search = ({ urlPath }) => {
  const [q] = useSearchParams()
  const queryTerm = q.get("q")
  const { movies } = useFetch(urlPath, queryTerm)

  return (
    <section className=' max-w-7xl mx-auto px-4'>
      <div>
        <p className=' dark:text-white text-xl text-center pt-2'>{`Search results for : ${queryTerm}`}</p>
      </div>
      <div className=' flex justify-center items-center text-center'>
      </div>
      {movies?.length > 0 ? (
        <div className=' flex flex-wrap justify-start gap-2 item pt-4 items-center'>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className='dark:text-white capitalize text-4xl font-semibold'>No movies found</p>
      )}
    </section>
  )
}


export default Search