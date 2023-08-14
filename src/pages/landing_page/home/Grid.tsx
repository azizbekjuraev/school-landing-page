import React from 'react'
import Icon1 from '../../../assets/images/figma-img/Rectangle 4454.png'
import Icon2 from '../../../assets/images/figma-img/Rectangle 4456.png'
import Icon3 from '../../../assets/images/figma-img/Rectangle 4455.png'
const Grid = () => {
  return (
    <>
      <div className=''>
        <div className='flex items-center justify-center'>
          <div className='grid  items-center gap-1 md:grid-cols-4 md:gap-1'>
            <div className='col-span-1  md:col-span-2'>
              <span>
                <img src={Icon1} alt='' className='cover' />
              </span>
            </div>
            <div className='col-span-1  md:col-span-2'>
              <span>
                <img src={Icon2} alt='' />
              </span>
            </div>
            <div className=' col-span-4 row-span-2'>
              <span>
                <img src={Icon3} alt='' />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Grid
