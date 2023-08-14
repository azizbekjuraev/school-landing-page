import React from 'react'
import CardImg from '../../assets/images/figma-img/Rectangle 4466.png'
import TeacherImg from '../../assets/images/figma-img/Ellipse 2710.png'
import Fill from '../../assets/images/figma-img/fill.png'
const ClassesCard = () => {
  return (
    <>
      <div className='bg-[#fff] pb-10 md:pb-20'>
        <div className='absolute'>
          <img src={Fill} className=' bottom-[10px] left-6 hidden md:block' alt='' />
        </div>
        <div className='relative'>
          <h4 className='text-center '>Classes</h4>
          <div className='flex items-center justify-center'>
            <div className='grid grid-cols-2 gap-4 p-2 md:grid-cols-4 lg:p-20'>
              {[1, 2, 3, 4].map(e => (
                <a
                  className='flex flex-col rounded-xl border bg-white shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:shadow-slate-700/[.7]'
                  href='#'
                >
                  <img className='h-auto w-full rounded-t-xl' src={CardImg} alt='Image Description' />
                  <div className='p-1 md:p-5'>
                    <p className='mt-1 text-gray-800 dark:text-gray-400'>
                      It is a long established fact that a reader will be distracted by the readable content of a page.
                    </p>
                    <div className='mt-4 flex items-center gap-4'>
                      <img src={TeacherImg} alt='' />
                      <div className='teacher'>
                        <p className='text-[10px] sm:text-base' style={{ fontWeight: 'bold' }}>
                          Azizova Nafisa
                        </p>
                        <p className='text-[12px] sm:text-base'>ESL Teacher</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClassesCard
