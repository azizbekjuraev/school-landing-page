import React from 'react'

interface ListLoadingProps {
  items: any[]
  count: number
}

const ListLoading: React.FC<ListLoadingProps> = ({ items, count }) => {
  items = items || Array.from({ length: count })
  return (
    <div className='divide-y divide-slate-100 dark:divide-slate-700'>
      {items.map((item, i) => (
        <div className='mx-auto w-full p-4' key={i}>
          <div className='flex animate-pulse items-center space-x-4'>
            <div className='flex flex-none items-center space-x-2'>
              <div className='h-5 w-5 rounded bg-[#C4C4C4] dark:bg-slate-500'></div>
              <div className='h-5 w-5 rounded bg-[#C4C4C4] dark:bg-slate-500'></div>
              <div className='h-8 w-8 rounded-full bg-[#C4C4C4] dark:bg-slate-500'></div>
            </div>
            <div className='h-2 flex-1 bg-[#C4C4C4] dark:bg-slate-500'></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListLoading
