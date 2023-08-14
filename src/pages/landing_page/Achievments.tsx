import React from 'react'
import School from '../../assets/images/figma-img/west_park_img.jpeg'
import PlayBtn from '../../assets/images/figma-img/button-play-blue.png'
import Loading from '../../assets/images/figma-img/achievments_loading.png'
import Triangle from '../../assets/images/figma-img/Triangle.png'
import FlowerIcon from '../../assets/images/figma-img/flower.png'
import FlowerIconLg from '../../assets/images/figma-img/big-star.png'
const Achievments = () => {
  return (
    <>
      <img src={Triangle} alt='' className='absolute sm:hidden md:block' />

      <div className='relative '>
        <h4 className='mb-8 mt-20 text-center'>Welcome to our school</h4>
        <div className='img-container relative mx-auto md:w-[480px] lg:w-[980px]'>
          <img src={School} alt='' />
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
            <img src={PlayBtn} alt='' className='mx-auto' />
            <p className='text-[#fff]'>Journey to school</p>
          </div>
        </div>
        <p className='mx-auto mb-10 mt-8 w-[68%] leading-8'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s
        </p>
        <div className='relative bg-[#2E46C6] py-10 text-[#fff] md:px-28'>
          <div className='absolute inset-0 flex items-center justify-center md:hidden'>
            <img src={FlowerIcon} alt='' className='mx-auto' style={{ opacity: '0.5' }} />
          </div>
          <div className='absolute inset-0  left-[400px] top-[-70px] hidden justify-center lg:block'>
            <img src={FlowerIconLg} alt='' className='mx-auto' style={{ opacity: '0.5' }} />
          </div>
          <h4 className=' text-center text-[#fff] md:mb-12 lg:text-left'>Achievments</h4>
          <div className='grid grid-cols-2 justify-center gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
            {[1, 2, 3, 4].map(e => (
              <ul className='rounded-lg  p-4'>
                <li className='mb-2 text-center lg:text-left'>1560+</li>
                <li className='mb-2'>
                  <img src={Loading} alt='' className='mx-auto lg:mx-0' />
                </li>
                <li className='text-center text-lg lg:text-left'>Students</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Achievments
