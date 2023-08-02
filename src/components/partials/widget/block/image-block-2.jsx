import React from 'react'
import Image2 from '@/assets/images/all-img/widget-bg-2.png'
const ImageBlock2 = () => {
  return (
    <div
      className='relative rounded-[6px] bg-cover bg-center bg-no-repeat p-5'
      style={{
        backgroundImage: `url(${Image2})`
      }}
    >
      <div>
        <h4 className='mb-2 text-xl font-medium text-white'>
          <span className='block font-normal'>Good evening,</span>
          <span className='block'>Mr. Dianne Russell</span>
        </h4>
        <p className='text-sm font-normal text-white'>Welcome to Template</p>
      </div>
    </div>
  )
}

export default ImageBlock2
