import GirlImg from '../../../assets/images/figma-img/woman talking with chatbot.png'

const Newsletter = () => {
  return (
    <div className='flex items-center justify-center bg-[#fff] px-2 py-3 pt-28'>
      <div className='relative flex w-full max-w-4xl flex-col justify-end gap-3 rounded-lg bg-[#5C75F9] px-5 py-5 drop-shadow-lg sm:flex-row'>
        <div className='bottom-[-25px] left-[-75px] md:absolute'>
          <img src={GirlImg} alt='' />
        </div>
        <div className='flex max-w-lg flex-col gap-3 md:p-10'>
          <h2 className='text-start text-2xl font-bold text-[#fff] md:pb-10 lg:text-4xl'>
            Leave your number and we’ll call you back
          </h2>
          <p className='text-base text-[#fff] md:text-lg'>Enter your number</p>
          <div className='flex max-w-md flex-col gap-5 sm:flex-row'>
            <div className='relative flex-1'>
              <div className='relative'>
                <span className='absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='h-4 w-4'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                    />
                  </svg>
                </span>
                <input
                  type='text'
                  className='w-full appearance-none rounded-lg bg-white px-4 py-2 pl-10 text-base shadow-sm focus:border-transparent focus:outline-none focus:ring-2'
                  placeholder='+(000) 000 00 00'
                />
              </div>
              <button
                className='absolute right-0 top-0 rounded-lg bg-[#3651BF] px-4 py-2 text-base font-semibold text-white shadow-md hover:bg-[#32439B] focus:outline-none focus:ring-2 focus:ring-[#547FDD] focus:ring-offset-2 focus:ring-offset-[#C7D9F6]'
                type='submit'
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
