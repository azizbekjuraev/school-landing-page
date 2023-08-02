import React from 'react'

interface Lists {
  title: string
  desc?: string
  date: string
  time: string
  status?: string
}

export const lists: Lists[] = [
  {
    title: 'Project start date',
    desc: 'This parcel is paid for by the customer. Please contact the customer for any further information.',
    date: 'Sep 20, 2021 ',
    time: '12:32 AM',
    status: 'ok'
  },
  {
    title: 'Project start date',
    date: 'Sep 20, 2021 ',
    desc: 'This parcel is paid for by the customer. Please contact the customer for any further information.',
    time: '12:32 AM',
    status: 'ok'
  },
  {
    title: 'Project start date',
    date: 'Sep 20, 2021 ',
    desc: 'This parcel is paid for by the customer. Please contact the customer for any further information.',
    time: '12:32 AM',
    status: 'ok'
  },
  {
    title: 'Project start date',
    date: 'Sep 20, 2021 ',
    desc: 'This parcel is paid for by the customer. Please contact the customer for any further information.',
    time: '12:32 AM'
  },
  {
    title: 'Project start date',
    date: 'Sep 20, 2021 ',
    desc: 'This parcel is paid for by the customer. Please contact the customer for any further information.',
    time: '12:32 AM'
  }
]
const TrackingParcel = () => {
  return (
    <ul className='relative ltr:pl-2 rtl:pr-2'>
      {lists.map((item, i) => (
        <li
          key={i}
          className={`
               ${item.status === 'ok' ? 'before:opacity-100' : ' before:opacity-50'}

                 relative border-slate-100 pb-4 before:absolute before:top-[0px] 
                 before:h-4 before:w-4 before:rounded-full before:bg-slate-900 before:leading-[2px] before:content-[url('@/assets/images/all-img/ck.svg')] 
                 last:border-none ltr:border-l-2 ltr:pl-[22px] ltr:before:left-[-8px] rtl:border-r-2
                  rtl:pr-[22px] rtl:before:-right-2 dark:border-slate-700 
                  dark:before:bg-slate-600 `}
        >
          <div className='relative top-[-20px] p-[10px]'>
            <h2 className='dark:text-slate-400-900 mb-1 text-sm font-medium text-slate-600'>{item.title}</h2>
            <p className='text-xs capitalize dark:text-slate-400'>{item.date}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TrackingParcel
