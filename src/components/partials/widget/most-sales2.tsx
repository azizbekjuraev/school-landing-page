import React from 'react'
import world from '@/constant/world-map.json'
import { VectorMap } from '@south-paw/react-vector-maps'

type Sale = {
  title: string
  amount: string
  cls: string
}

type MostSales2Props = {
  filterMap: string
}

const sales: Sale[] = [
  {
    title: 'Nevada',
    amount: '(80%)',
    cls: 'bg-primary-500 ring-primary-500'
  },
  {
    title: 'Ohio',
    amount: '(75%)',
    cls: 'bg-success-500 ring-success-500'
  },
  {
    title: 'Montana',
    amount: '(65%)',
    cls: 'bg-info-500 ring-info-500'
  },
  {
    title: 'Iowa',
    amount: '(85%)',
    cls: 'bg-warning-500 ring-warning-500'
  },
  {
    title: 'Arkansas',
    amount: '(90%)',
    cls: 'bg-success-500 ring-success-500'
  }
]

const MostSales2: React.FC<MostSales2Props> = ({ filterMap }) => {
  return (
    <div>
      <VectorMap {...world} className='dash-codevmap h-[280px] w-full' />
      <ul className='mt-8 flex min-w-[184px] flex-wrap items-center justify-between rounded bg-slate-50 p-4 text-center dark:bg-slate-900'>
        {sales.map((item: Sale, i: number) => (
          <li key={i} className='text-sm text-slate-600 dark:text-slate-300'>
            <span className='block space-x-2 rtl:space-x-reverse'>
              <span
                className={`${item.cls} inline-flex h-[6px] w-[6px] rounded-full bg-primary-500 ring-4 ring-opacity-25`}
              ></span>
              <span>{item.title}</span>
            </span>
            <span className='mt-1 block'>{item.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MostSales2
