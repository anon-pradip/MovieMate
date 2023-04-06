import React from 'react'
import notFound from '../assets/404.jpg'
const PageNotFound = () => {
  return (
    <div className=' flex justify-center items-center flex-col space-y-2 lg:space-y-7 pt-5 px-2'>
      <p className=' dark:text-white text-2xl py-7 lg:py-4 md:text-6xl capitalize text-center'>oops! Page not found</p>
      <div className=' max-w-lg'>
        <img src={notFound} alt="" className='rounded-t-md' />
      </div>
    </div>
  )
}

export default PageNotFound