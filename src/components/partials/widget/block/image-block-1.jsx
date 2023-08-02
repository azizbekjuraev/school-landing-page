import React from 'react'

import image1 from '@/assets/images/all-img/widget-bg-1.png'
const ImageBlock1 = () => {
  return (
    <div
      className='relative rounded-[6px] bg-cover bg-center bg-no-repeat p-4'
      style={{
        backgroundImage: `url(${image1})`
      }}
    >
      <div className='max-w-[169px]'>
        <div className='mb-2 text-xl font-medium text-slate-900'>Upgrade your Template</div>
        <p className='text-sm text-slate-800'>Pro plan for better results</p>
      </div>
      <div className='absolute top-1/2 mt-2 flex h-12 w-12 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white text-xs font-medium text-slate-900 ltr:right-6 rtl:left-6'>
        Now
      </div>
    </div>
  )
}

export default ImageBlock1
