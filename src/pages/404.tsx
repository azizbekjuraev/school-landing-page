import React from 'react'
import { Link } from 'react-router-dom'
import ErrorImage from '@/assets/images/all-img/404-2.svg'

const Error: React.FC = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-20 text-center dark:bg-slate-900'>
      <img src={ErrorImage} alt='' />
      <div className='mx-auto mt-12 w-full max-w-[546px]'>
        <h4 className='mb-4 text-slate-900'>Page not found</h4>
        <div className='mb-10 text-base font-normal dark:text-white'>
          The page you are looking for might have been removed had its name changed or is temporarily unavailable.
        </div>
      </div>
      <div className='mx-auto w-full max-w-[300px]'>
        <Link to='/' className='btn btn-dark block text-center dark:bg-slate-800'>
          Go to homepage
        </Link>
      </div>
    </div>
  )
}

export default Error
