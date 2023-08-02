import React from 'react'
import ProgressBar from '@/components/ui/ProgressBar'

import Image1 from '@/assets/images/all-img/cus-1.png'
import Image2 from '@/assets/images/all-img/cus-2.png'
import Image3 from '@/assets/images/all-img/cus-3.png'

import Cuser1 from '@/assets/images/users/user-1.jpg'
import Cuser2 from '@/assets/images/users/user-2.jpg'
import Cuser3 from '@/assets/images/users/user-3.jpg'
import customerCrownImage from '@/assets/images/icon/crown.svg'

const Customer = () => {
  interface Customers {
    title: string
    img: string
    value: number
    bg: string
    barColor: string
    active?: boolean
    number: number
  }

  const customers: Customers[] = [
    {
      title: 'Nicole Kidman',
      img: Image1,
      value: 70,
      bg: 'before:bg-info-500',
      barColor: 'bg-info-500',
      number: 2
    },
    {
      title: 'Monica Bellucci',
      img: Image2,
      value: 80,
      bg: 'before:bg-warning-500',
      barColor: 'bg-warning-500',
      active: true,
      number: 1
    },
    {
      title: 'Pamela Anderson',
      img: Image3,
      value: 65,
      bg: 'before:bg-success-500',
      barColor: 'bg-success-500',
      number: 3
    }
  ]
  const customers2: Customers[] = [
    {
      title: 'Dianne Russell',
      img: Cuser1,
      value: 60,
      bg: 'before:bg-info-500',
      barColor: 'bg-info-500',
      number: 4
    },
    {
      title: 'Robert De Niro',
      img: Cuser2,
      value: 50,
      bg: 'before:bg-warning-500',
      barColor: 'bg-warning-500',

      number: 5
    },
    {
      title: 'De Niro',
      img: Cuser3,
      value: 60,
      bg: 'before:bg-warning-500',
      barColor: 'bg-warning-500',

      number: 6
    }
  ]
  return (
    <div className='pb-2'>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
        {customers.map((item, i) => (
          <div
            key={i}
            className={` relative z-[1] rounded p-4 text-center before:absolute before:left-0 before:top-[60px] before:z-[-1] before:h-[calc(100%-60px)] before:w-full before:rounded before:bg-opacity-[0.1] ${item.bg}`}
          >
            <div
              className={`${
                item.active ? 'ring-2 ring-[#FFC155]' : ''
              } relative mx-auto mb-4 h-[70px] w-[70px] rounded-full`}
            >
              {item.active && (
                <span className='crown absolute -top-[24px] left-1/2 -translate-x-1/2'>
                  <img src={customerCrownImage} alt='' />
                </span>
              )}
              <img src={item.img} alt='' className='h-full w-full rounded-full' />
              <span className='absolute bottom-0 right-0 flex h-[27px] w-[27px] flex-col items-center justify-center rounded-full border border-white bg-[#FFC155] text-xs font-medium text-white'>
                {item.number}
              </span>
            </div>
            <h4 className='mb-4 text-sm font-semibold text-slate-600'>{item.title}</h4>
            <div className='inline-block min-w-[60px] rounded-full bg-slate-900 px-[10px] py-[6px] text-xs font-medium text-white'>
              {item.value}
            </div>
            <div>
              <div className='mb-3 mt-4 flex justify-between text-sm font-normal dark:text-slate-300'>
                <span>Progress</span>
                <span className='font-normal'>{item.value}%</span>
              </div>
              <ProgressBar value={item.value} className={item.barColor} />
            </div>
          </div>
        ))}
      </div>
      <div className='mt-5 grid grid-cols-1 gap-5'>
        {customers2.map((item, i) => (
          <div
            key={i}
            className='bg-gray-5003 relative z-[1] items-center space-y-3 rounded p-4 rtl:space-x-reverse dark:bg-slate-900 md:flex md:space-x-10 md:space-y-0'
          >
            <div className={`${item.active ? 'ring-2 ring-[#FFC155]' : ''} relative h-10 w-10 rounded-full`}>
              {item.active && (
                <span className='crown absolute -top-[14px] left-1/2 -translate-x-1/2'>
                  <img src={customerCrownImage} alt='' />
                </span>
              )}
              <img src={item.img} alt='' className='h-full w-full rounded-full' />
              <span className='absolute bottom-0 right-0 flex h-4 w-4 flex-col items-center justify-center rounded-full border border-white bg-[#FFC155] text-[10px] font-medium text-white'>
                {item.number}
              </span>
            </div>
            <h4 className='text-sm font-semibold text-slate-600'>{item.title}</h4>
            <div className='inline-block min-w-[60px] rounded-full bg-slate-900 px-[10px] py-[6px] text-center text-xs font-medium text-white'>
              {item.value}
            </div>
            <div className='flex-1'>
              <div className='mb-3 flex justify-between text-sm font-normal dark:text-slate-300'>
                <span>Progress</span>
                <span className='font-normal'>{item.value}%</span>
              </div>
              <ProgressBar value={item.value} className={item.barColor} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Customer
