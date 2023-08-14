import Icon1 from '../../assets/images/figma-img/search window.png'
import Icon2 from '../../assets/images/figma-img/woman scientist with microscope.png'
import Icon3 from '../../assets/images/figma-img/little boy at the table.png'
import Icon4 from '../../assets/images/figma-img/cork board with statistics and notes.png'
import Check from '../../assets/images/figma-img/check_btn.png'
const WhatWeOffer = () => {
  return (
    <>
      <div className='bg-[#fff] sm:pb-4 lg:pb-8'>
        <h4 className='pt-14 text-center'>What We Offer</h4>
        <div className='mt-2 flex flex-col md:mt-8 md:flex-row'>
          <div className=' w-full p-4 md:w-1/2'>
            <div className='grid h-full place-items-center'>
              <div className='grid gap-2   md:h-screen md:grid-cols-2 md:grid-rows-4 md:gap-4'>
                <div className='sm:pb-2 sm:pt-2 '>
                  <div className='md:width-[288px] rounded-xl bg-[#657DFF] pt-2  sm:h-full sm:w-full md:h-[350px]'>
                    <img src={Icon1} alt='' className='mx-auto w-[80%]' />
                    <p className=' m-auto mt-10 w-[80%] rounded-full border border-solid border-[#fff] p-1 text-center text-[#fff]'>
                      latest metodology
                    </p>
                  </div>
                </div>
                <div className='sm:pb-2 sm:pt-2 md:pb-12 md:pt-10'>
                  <div className='md:width-[288px] rounded-xl bg-[pink]  pt-4 sm:h-full sm:w-full md:h-[350px]'>
                    <p className=' m-auto w-[80%] rounded-full border border-solid border-[#fff] p-1 text-center text-[#fff]'>
                      latest metodology
                    </p>
                    <img src={Icon2} alt='' className='pt-6' />
                  </div>
                </div>
                <div className='sm:pb-2 sm:pt-2 md:pb-12 md:pt-52'>
                  <div className='md:width-[288px] rounded-xl bg-[pink] pt-4 sm:h-full sm:w-full md:h-[350px]'>
                    <p className=' m-auto w-[80%] rounded-full border border-solid border-[#fff] p-1 text-center text-[#fff]'>
                      latest metodology
                    </p>
                    <img src={Icon3} alt='' className='pt-6' />
                  </div>
                </div>
                <div className='sm:pt:2 sm:pb-2 md:pb-12 md:pt-60'>
                  <div className='md:width-[288px] rounded-xl bg-[#657DFF] pt-2  sm:h-full sm:w-full md:h-[350px]'>
                    <img src={Icon4} alt='' className='mx-auto w-[80%]' />
                    <p className=' m-auto mt-16 w-[80%] rounded-full border border-solid border-[#fff] p-1 text-center text-[#fff]'>
                      latest metodology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='ml-4 w-full items-center md:w-1/2'>
            <div className=''>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(e => (
                <div className='mx-auto hidden items-center gap-4 text-2xl md:flex md:leading-[5rem]'>
                  <img src={Check} alt='' width={'40px'} />
                  <p className=''>Top quality of education team</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatWeOffer
