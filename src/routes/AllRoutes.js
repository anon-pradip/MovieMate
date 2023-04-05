import { Routes, Route } from "react-router-dom"
import { MovieDetail, MovieList, PageNotFound, Search } from "../pages"

const AllRoutes = () => {
  return (
    <section className="">
      <Routes>
        <Route path="/" element={<MovieList urlPath="movie/now_playing" />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="movies/popular" element={<MovieList urlPath="movie/popular" />} />
        <Route path="movies/top" element={<MovieList urlPath="movie/top_rated" />} />
        <Route path="movies/upcoming" element={<MovieList urlPath="movie/upcoming" />} />
        <Route path="search" element={<Search urlPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </section>
  )
}

export default AllRoutes