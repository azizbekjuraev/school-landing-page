import { useRef, useState } from 'react'
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef(null)

  const handleDotClick = index => {
    setActiveIndex(index)
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = index * sliderRef.current.offsetWidth
    }
  }

  const slideItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] // Example: Replace this with your actual slide data

  return (
    <>
      <div className='text-neutral-50'>
        <div id='app' className='mx-auto py-12 transition-all duration-500 ease-linear md:px-14'>
          <h1 className='font-cabinetGrotesk relative mb-12 text-center text-3xl font-bold leading-tight lg:text-4xl'>
            Testimonials
          </h1>
          <div className='relative'>
            <div
              ref={sliderRef}
              className='slides-container flex h-72 snap-x snap-mandatory space-x-2 overflow-hidden overflow-x-auto scroll-smooth rounded before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0'
            >
              {slideItems.map((slide, index) => (
                <div
                  key={index}
                  className='slide aspect-square h-full flex-shrink-0 snap-center overflow-hidden rounded'
                >
                  <div className='slide aspect-square h-full flex-shrink-0 snap-center overflow-hidden rounded'>
                    <div className='three grid grid-cols-1 gap-4 md:gap-8'>
                      <div className='rounded-lg bg-[#F8F8FF]  p-8 shadow-md'>
                        <div className='flex items-center gap-4'>
                          <img
                            alt='Man'
                            src='https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
                            className='h-16 w-16 rounded-full object-cover'
                          />

                          <div>
                            <div className='flex justify-center gap-0.5 text-[#F6E864]'>
                              {[1, 2, 3, 4, 5].map(e => (
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='h-4 w-4'
                                  viewBox='0 0 20 20'
                                  fill='currentColor'
                                >
                                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                                </svg>
                              ))}
                            </div>

                            <p className='mt-1 text-lg font-medium text-gray-700'>Paul Starr</p>
                          </div>
                        </div>

                        <p className='mt-4 line-clamp-2 text-gray-500 sm:line-clamp-none'>
                          At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis praesen voluptatum
                          deleniti.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='dots-container mb-8 mt-2 flex justify-center'>
              {slideItems.map((slide, dotIndex) => (
                <div
                  key={dotIndex}
                  onClick={() => handleDotClick(dotIndex)}
                  className={`dot mx-1 h-3 w-3 rounded-full ${dotIndex === activeIndex ? 'bg-red-500' : 'bg-gray-300'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
