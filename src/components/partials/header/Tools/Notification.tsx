import React from 'react'
import Dropdown from '@/components/ui/Dropdown'
import Icon from '@/components/ui/Icon'
import { Link } from 'react-router-dom'
import { Menu } from '@headlessui/react'
import { notifications } from '@/constant/data'

const NotifyLabel: React.FC = () => {
  return (
    <span className='relative flex cursor-pointer flex-col items-center justify-center rounded-full text-[20px] text-slate-900 dark:text-white lg:h-[32px] lg:w-[32px] lg:bg-slate-100 lg:dark:bg-slate-900'>
      <Icon icon='heroicons-outline:bell' className='animate-tada' />
      <span className='absolute -right-2 -top-2 z-[99] flex h-4 w-4 flex-col items-center justify-center rounded-full bg-red-500 text-[8px] font-semibold text-white lg:right-0 lg:top-0'>
        2
      </span>
    </span>
  )
}

const Notification: React.FC = () => {
  return (
    <Dropdown classMenuItems='md:w-[300px] top-[58px]' label={<NotifyLabel />}>
      <>
        <div className='flex justify-between border-b border-slate-100 px-4 py-4 dark:border-slate-600'>
          <div className='text-sm font-medium leading-6 text-slate-800 dark:text-slate-200'>Notifications</div>
          <div className='text-xs text-slate-800 dark:text-slate-200 md:text-right'>
            <Link to='/notifications' className='underline'>
              View all
            </Link>
          </div>
        </div>
        <div className='divide-y divide-slate-100 dark:divide-slate-800'>
          {notifications?.map((item, i) => (
            <Menu.Item key={i}>
              {({ active }) => (
                <div
                  className={`${
                    active
                      ? 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:bg-opacity-70'
                      : 'text-slate-600 dark:text-slate-300'
                  } block w-full cursor-pointer px-4 py-2  text-sm`}
                >
                  <div className='flex ltr:text-left rtl:text-right'>
                    <div className='flex-none ltr:mr-3 rtl:ml-3'>
                      <div className='h-8 w-8 rounded-full bg-white'>
                        <img
                          src={item.image}
                          alt=''
                          className={`${
                            active ? ' border-white' : ' border-transparent'
                          } block h-full w-full rounded-full border object-cover`}
                        />
                      </div>
                    </div>
                    <div className='flex-1'>
                      <div
                        className={`${
                          active ? 'text-slate-600 dark:text-slate-300' : ' text-slate-600 dark:text-slate-300'
                        } text-sm`}
                      >
                        {item.title}
                      </div>
                      <div
                        className={`${
                          active ? 'text-slate-500 dark:text-slate-200' : ' text-slate-600 dark:text-slate-300'
                        } text-xs leading-4`}
                      >
                        {item.desc}
                      </div>
                      <div className='mt-1 text-xs text-slate-400 dark:text-slate-400'>3 min ago</div>
                    </div>
                    {item.unread && (
                      <div className='flex-0'>
                        <span className='inline-block h-[10px] w-[10px] rounded-full border border-white bg-danger-500 dark:border-slate-400'></span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </Menu.Item>
          ))}
        </div>
      </>
    </Dropdown>
  )
}

export default Notification
