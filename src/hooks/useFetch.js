import React, { useEffect, useState } from 'react'

const useFetch = (urlPath) => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    async function getMovies() {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${urlPath}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      const data = await res.json();
      setMovies(data?.results)
    }
    getMovies();
  }, [urlPath])
  return { movies }
}

export default useFetch