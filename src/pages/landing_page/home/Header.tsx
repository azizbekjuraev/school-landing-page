import React from 'react'
import Notebook from '../../../assets/images/figma-img/Notebook.png'
import PlayBtn from '../../../assets/images/figma-img/button-play.png'

const Header = () => {
  return (
    <>
      <div className=''>
        <div className='flex w-[240px] items-center gap-2 rounded-full bg-[#FDECEC]'>
          <p className='p-2 text-[#2E46C6]'>3 years in teaching</p>
          <img src={Notebook} className='h-[24px] w-[24px]' alt='' />
        </div>
        <h1 className='mb-4 mt-4 md:leading-[5.5rem]'>Modern school with new teaching methodology</h1>
        <p className='mb-8 leading-[1.875rem]  md:w-[75%]'>
          Grocen assures fresh grocery every morning to your family without getting out in this pandemic.
        </p>
        <div className=' mx-auto mb-4 flex justify-center md:justify-start'>
          <button className='mr-4 rounded-xl bg-[#2E46C6] px-8 py-4 text-[#fff]'>Let's go</button>

          <button className='flex items-center rounded-xl border border-[#2E46C6] bg-transparent px-3  font-semibold text-[#2E46C6] hover:border-transparent hover:bg-[#2E46C6] hover:text-white'>
            <img src={PlayBtn} alt='' className='mr-2 w-[50px]' />
            Virtual journey
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
