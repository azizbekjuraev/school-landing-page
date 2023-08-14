import React from 'react'
import ThumbIcon from '../../assets/images/figma-img/Woman giving thumbs up for good work.png'
const WhyChooseUs = () => {
  return (
    <>
      <div className='relative'>
        <div className=' bg-[#F5F8FE] px-4 py-4 md:px-32 md:py-8'>
          <div className='mx-0 lg:w-[50%]'>
            <p className='pb-4 pt-4 text-[#FC8B8C] md:text-[#03A66B]'>WHY CHOOSE US</p>
            <h4 className='pb-4 md:w-[60%]'>Find Favorites and Discover New Ones</h4>
            <p className='md:w-[60%]'>
              At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis praesen voluptatum deleniti.
            </p>
            <div className='flex items-center justify-center pb-4 pt-4 md:block'>
              <button className='rounded-xl bg-[#2E46C6] px-8 py-4 text-[#fff]'>Explore now</button>
            </div>
          </div>
        </div>
        <div className='absolute bottom-[5px] right-[300px] hidden lg:block'>
          <img src={ThumbIcon} alt='' />
        </div>
      </div>
    </>
  )
}

export default WhyChooseUs
