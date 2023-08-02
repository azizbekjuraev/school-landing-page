import React from 'react'
import world from '@/constant/world-map.json'
import { VectorMap } from '@south-paw/react-vector-maps'

type Sale = {
  title: string
  amount: string
  cls: string
}

type MostSalesProps = {
  filterMap: string
}

const slaes: Sale[] = [
  {
    title: 'Nevada',
    amount: '$125k',
    cls: 'bg-primary-500 ring-primary-500'
  },
  {
    title: 'Colorado',
    amount: '$$325k',
    cls: 'bg-success-500 ring-success-500'
  },
  {
    title: 'Iowa',
    amount: '$67',
    cls: 'bg-info-500 ring-info-500'
  },
  {
    title: 'Arkansas',
    amount: '$354k',
    cls: 'bg-warning-500 ring-warning-500'
  },
  {
    title: 'Wyoming',
    amount: '$195k',
    cls: 'bg-success-500 ring-success-500'
  },
  {
    title: 'Other countries',
    amount: '$295k',
    cls: 'bg-secondary-500 ring-secondary-500'
  }
]

const MostSales: React.FC<MostSalesProps> = ({ filterMap }) => {
  return (
    <div className='items-center md:flex'>
      <div className='flex-none'>
        <h4 className='mb-[6px] text-sm font-normal text-slate-600 dark:text-slate-200'>Total earnings</h4>
        {filterMap === 'usa' && (
          <div className='mb-[6px] text-lg font-medium text-slate-900 dark:text-white'>$12,65,64787.00</div>
        )}
        {filterMap === 'global' && (
          <div className='mb-[6px] text-lg font-medium text-slate-900 dark:text-white'>$12,65.00</div>
        )}
        <div className='text-xs font-light dark:text-slate-200'>
          <span className='text-primary-500'>+08%</span> From last month
        </div>
        <ul className='mt-4 min-w-[184px] space-y-5 rounded bg-slate-50 p-4 dark:bg-slate-900'>
          {slaes.map((item: Sale, i: number) => (
            <li key={i} className='flex justify-between text-xs text-slate-600 dark:text-slate-300'>
              <span className='flex items-center space-x-2 rtl:space-x-reverse'>
                <span
                  className={` inline-flex h-[6px] w-[6px] rounded-full bg-primary-500 ring-4 ring-opacity-25
                        ${item.cls}
                        `}
                ></span>
                <span>{item.title}</span>
              </span>
              <span>{item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex-1'>
        <VectorMap {...world} className='dash-codevmap' />
      </div>
    </div>
  )
}

export default MostSales
