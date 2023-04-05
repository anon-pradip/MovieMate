import React, { useEffect, useState } from 'react'

const useFetch = (urlPath, queryTerm = "") => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    async function getMovies() {
      const res = await fetch(`https://api.themoviedb.org/3/${urlPath}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${queryTerm}`)
      const data = await res.json();
      setMovies(data?.results)
    }
    getMovies();
  }, [urlPath, queryTerm])
  return { movies }
}

export default useFetch