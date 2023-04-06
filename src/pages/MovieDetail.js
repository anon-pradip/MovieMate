import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
  const { id } = useParams()
  const [data, setData] = useState({});
  const image = `https://image.tmdb.org/t/p/w500/${data.poster_path}`

  let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(url)
      const json = await res.json();
      setData(json)
    }
    fetchMovie()
  }, [id])

  console.log(data)
  return (
    <div className=' dark:text-white py-5 px-2 lg:max-w-5xl lg:mx-auto'>

      <div className=' flex justify-start flex-col lg:flex-row space-y-4 space-x-0 lg:space-x-10 lg:space-y-0'>
        {/* IMAGE */}
        <div>
          <img src={image} alt="no poster found" className='max-h-[500px] rounded-md' />
        </div>
        <div className='flex flex-col space-y-2'>
          <h1 className='font-bold text-2xl'>{data.original_title}</h1>
          <p className=' max-w-xl'>{data.overview}</p>
          <div className=' flex flex-wrap space-x-2'>
            {data.genres?.map((genre) => (
              <p key={genre.id} className='border rounded-full px-2 py-1 border-yellow-500'>{genre.name}</p>
            ))}
          </div>
          <div class="flex items-center pt-3">
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">{data.vote_average}</p>
            <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{data.vote_count} reviews</a>
          </div>
          <div className='pt-5'>
            <span className='font-semibold'>Runime:</span>
            <span className=' ml-2'>{data.runtime} min</span>
          </div>
          <div className='pt-5'>
            <span className='font-semibold'>Budget:</span>
            <span className=' ml-2'>{data.budget}</span>
          </div>
          <div className='pt-5'>
            <span className='font-semibold'>Revenue:</span>
            <span className=' ml-2'>{data.revenue}</span>
          </div>
          <div className='pt-5'>
            <span className='font-semibold'>Release Date:</span>
            <span className=' ml-2'>{data.release_date}</span>
          </div>
          <div className='pt-5'>
            <span className='font-semibold'>IMDB Code:</span>
            <a href={`https://www.imdb.com/title/${data.imdb_id}`} className='underline ml-2' target="_blank">{data.imdb_id}</a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MovieDetail