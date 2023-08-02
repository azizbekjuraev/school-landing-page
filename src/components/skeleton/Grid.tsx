import React from 'react'

interface GridProps {
  items?: any[]
  count?: number
}

const Grid: React.FC<GridProps> = ({ items, count = 6 }) => {
  // set items length by count
  items = items || Array.from({ length: count })
  return (
    <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
      {items.map((item, i) => (
        <div className='h-full rounded-md bg-white p-6 shadow-base dark:bg-slate-700' key={i}>
          <div className='animate-pulse'>
            <header className='flex items-center justify-between space-x-6'>
              <div className='flex flex-1 items-center space-x-4'>
                <div className='flex flex-none items-center space-x-2'>
                  <div className='h-10 w-10 rounded bg-[#C4C4C4] dark:bg-slate-500'></div>
                </div>
                <div className='h-2 flex-1 rounded-full bg-[#C4C4C4] dark:bg-slate-500'></div>
              </div>
              <div className='flex-none'>
                <div className='h-6 w-6 rounded-full bg-[#C4C4C4] dark:bg-slate-500'></div>
              </div>
            </header>
            <div className='space-y-2 py-6'>
              <div className='h-[6px] bg-[#C4C4C4] dark:bg-slate-500'></div>
              <div className='h-[6px] bg-[#C4C4C4] dark:bg-slate-500'></div>
              <div className='h-[6px] bg-[#C4C4C4] dark:bg-slate-500'></div>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <div className='space-y-2'>
                <span className='block h-[4px] bg-[#C4C4C4] dark:bg-slate-500'></span>
                <span className='block h-[4px] bg-[#C4C4C4] dark:bg-slate-500'></span>
              </div>

              <div className='space-y-2'>
                <span className='block h-[4px] bg-[#C4C4C4] dark:bg-slate-500'></span>
                <span className='block h-[4px] bg-[#C4C4C4] dark:bg-slate-500'></span>
              </div>
            </div>

            <div className='mt-6 grid grid-cols-2 gap-5'>
              <div className='flex -space-x-1'>
                <div className='h-6 w-6 rounded-full bg-[#C4C4C4] dark:bg-slate-500'></div>
                <div className='h-6 w-6 rounded-full bg-[#C4C4C4] dark:bg-slate-500'></div>
                <div className='h-6 w-6 rounded-full bg-[#C4C4C4] dark:bg-slate-500'></div>
              </div>
              <div>
                <span className='inline-block h-[18px] w-[130px] rounded-full bg-[#C4C4C4] dark:bg-slate-500'></span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Grid
