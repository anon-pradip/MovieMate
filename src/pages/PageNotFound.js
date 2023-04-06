import React from 'react'
import notFound from '../assets/404.jpg'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
  return (
    <div className=' flex justify-center items-center flex-col space-y-2 lg:space-y-7 pt-5 px-2'>
      <p className=' dark:text-white py-7 lg:py-4 text-6xl capitalize text-center'>oops! Page not found</p>
      <div className=' max-w-lg'>
        <img src={notFound} alt="" className=' rounded-t-lg' />
      </div>
      <div>

        <Link to="/" className="mt-12 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Back to home
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound