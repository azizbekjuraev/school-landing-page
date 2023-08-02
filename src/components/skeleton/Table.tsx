import React from 'react'

interface SkeletonTableProps {
  items?: any[]
  count?: number
}

const SkeletionTable: React.FC<SkeletonTableProps> = ({ items, count = 10 }) => {
  items = items || Array.from({ length: count })
  return (
    <div className='w-full rounded-md bg-white p-6 shadow-base dark:bg-slate-700'>
      <table className='w-full table-fixed border-separate border-spacing-4 animate-pulse'>
        <thead>
          <tr>
            <th scope='col'>
              <div className='h-4 bg-[#C4C4C4] dark:bg-slate-500'></div>
            </th>
            <th scope='col'>
              <div className='h-4 bg-[#C4C4C4] dark:bg-slate-500'></div>
            </th>
            <th scope='col'>
              <div className='h-4 bg-[#C4C4C4] dark:bg-slate-500'></div>
            </th>
            <th scope='col'>
              <div className='h-4 bg-[#C4C4C4] dark:bg-slate-500'></div>
            </th>
            <th scope='col'>
              <div className='h-4 bg-[#C4C4C4] dark:bg-slate-500'></div>
            </th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {items.map((item, i) => (
            <tr key={i}>
              <td>
                <div className='h-2 bg-[#C4C4C4] dark:bg-slate-500'></div>
              </td>
              <td>
                <div className='h-2 bg-[#C4C4C4] dark:bg-slate-500'></div>
              </td>
              <td>
                <div className='h-2 bg-[#C4C4C4] dark:bg-slate-500'></div>
              </td>
              <td>
                <div className='h-2 bg-[#C4C4C4] dark:bg-slate-500'></div>
              </td>
              <td>
                <div className='h-2 bg-[#C4C4C4] dark:bg-slate-500'></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SkeletionTable
