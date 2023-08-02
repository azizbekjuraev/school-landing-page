import React from 'react'
import Dropdown from '@/components/ui/Dropdown'
import Icon from '@/components/ui/Icon'
import { Menu } from '@headlessui/react'

interface Action {
  name: string
}

const actions: Action[] = [
  {
    name: 'Last 28 Days'
  },
  {
    name: ' Last Month '
  },
  {
    name: '  Last Year '
  }
]

const SelectMonth = () => {
  return (
    <>
      <Dropdown
        classMenuItems=' w-[140px]'
        label={
          <span className='inline-flex h-6 w-6 flex-col items-center justify-center rounded border border-slate-200 text-lg dark:border-slate-700 dark:text-slate-400'>
            <Icon icon='heroicons-outline:dots-horizontal' />
          </span>
        }
      >
        <div>
          {actions.map((item, i) => (
            <Menu.Item key={i}>
              <div
                className='`
                
                  ` flex w-full cursor-pointer items-center space-x-2
                   border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm text-slate-900  first:rounded-t last:mb-0 last:rounded-b hover:bg-secondary-500 hover:text-white  dark:bg-opacity-60 dark:text-slate-300 dark:hover:bg-slate-600'
              >
                <span>{item.name}</span>
              </div>
            </Menu.Item>
          ))}
        </div>
      </Dropdown>
    </>
  )
}

export default SelectMonth
