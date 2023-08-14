import React from 'react'
import Newsletter from './Newsletter'
import Testimonials from './Testimonials'
import Vector from '../../../assets/images/figma-img/Vector 6326.png'
const TestimonialsTable = () => {
  return (
    <>
      <div className='bg-[#fff]'>
        <div className='relative'>
          <img
            src={Vector}
            alt=''
            className='absolute right-0 top-1/2 hidden max-h-[100%] max-w-[100%] -translate-y-1/2 transform lg:block'
          />
          <Newsletter />
          <Testimonials />
        </div>
      </div>
    </>
  )
}

export default TestimonialsTable
