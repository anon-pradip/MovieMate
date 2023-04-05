import { Routes, Route } from "react-router-dom"
import { MovieDetail, MovieList, PageNotFound, Search } from "../pages"

const AllRoutes = () => {
  return (
    <section className="">
      <Routes>
        <Route path="/" element={<MovieList urlPath="now_playing" />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="movies/popular" element={<MovieList urlPath="popular" />} />
        <Route path="movies/top" element={<MovieList urlPath="top_rated" />} />
        <Route path="movies/upcoming" element={<MovieList urlPath="upcoming" />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </section>
  )
}

export default AllRoutes