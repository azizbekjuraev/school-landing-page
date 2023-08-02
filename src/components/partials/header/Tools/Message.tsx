import React from 'react'
import Dropdown from '@/components/ui/Dropdown'
import Icon from '@/components/ui/Icon'
import { Link } from 'react-router-dom'
import { Menu } from '@headlessui/react'
import { message } from '@/constant/data'

const MessageLabel: React.FC = () => {
  return (
    <span className='relative flex cursor-pointer flex-col items-center justify-center rounded-full text-[20px] text-slate-900 dark:text-white lg:h-[32px] lg:w-[32px] lg:bg-slate-100 lg:dark:bg-slate-900'>
      <Icon icon='heroicons-outline:mail' />
      <span className='absolute -right-2 -top-2 z-[99] flex h-4 w-4 flex-col items-center justify-center rounded-full bg-red-500 text-[8px] font-semibold text-white lg:right-0 lg:top-0'>
        10
      </span>
    </span>
  )
}
// message slice  0-4
const newMessage = message.slice(0, 4)

const Message: React.FC = () => {
  return (
    <Dropdown classMenuItems='md:w-[335px] w-min top-[58px]' label={<MessageLabel />}>
      <>
        <div className='flex justify-between border-b border-slate-100 px-4 py-4 dark:border-slate-600'>
          <div className='text-sm font-medium leading-6 text-slate-800 dark:text-slate-200'>Messages</div>
          <div className='text-xs text-slate-800 dark:text-slate-200 md:text-right'>
            <Link to='/chat' className='underline'>
              View all
            </Link>
          </div>
        </div>
        <div className='divide-y divide-slate-100 dark:divide-slate-800'>
          {newMessage?.map((item, i) => (
            <Menu.Item key={i}>
              {({ active }) => (
                <div
                  className={`${
                    active
                      ? 'bg-slate-100 text-slate-800 dark:bg-slate-600 dark:bg-opacity-70'
                      : 'text-slate-600 dark:text-slate-300'
                  } block w-full cursor-pointer px-4 py-2  text-sm`}
                >
                  <div className='flex space-x-3 ltr:text-left rtl:space-x-reverse rtl:text-right'>
                    <div className='flex-none'>
                      <div className='relative h-8 w-8 rounded-full bg-white dark:bg-slate-700'>
                        <span
                          className={`${
                            item.active ? 'bg-secondary-500' : 'bg-green-500'
                          } absolute right-0 top-0 inline-block h-[10px] w-[10px]  rounded-full border border-white dark:border-slate-700`}
                        ></span>
                        <img
                          src={item.image}
                          alt=''
                          className='block h-full w-full rounded-full border border-transparent object-cover hover:border-white'
                        />
                      </div>
                    </div>
                    <div className='flex-1'>
                      <div className='mb-1` text-sm font-medium text-slate-800 dark:text-slate-300'>{item.title}</div>
                      <div className='mb-1 text-xs text-slate-600 hover:text-[#68768A] dark:text-slate-300'>
                        {item.desc}
                      </div>
                      <div className='text-xs text-slate-400 dark:text-slate-400'>3 min ago</div>
                    </div>
                    {item.hasnotifaction && (
                      <div className='flex-0'>
                        <span className='flex h-4 w-4 items-center justify-center rounded-full border border-white bg-danger-500 text-[10px] text-white'>
                          {item.notification_count}
                        </span>
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

export default Message
