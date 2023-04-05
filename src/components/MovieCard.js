import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  const { id, original_title, poster_path, overview } = movie;
  const image = `https://image.tmdb.org/t/p/w500/${poster_path}`

  let croppedText = ""
  if (overview.length > 50) {
    croppedText = overview.slice(0, 50)
  } else {
    croppedText = overview
  }

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg max-h-[574px]" src={image} alt="" />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span>{overview.slice(0, 200)}</span>
          <span>&nbsp;{overview.length > 200 && "..."}</span>
        </p>
      </div>
    </div>

  )
}

export default MovieCard

