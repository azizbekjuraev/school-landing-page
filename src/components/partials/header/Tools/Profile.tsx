import React, { useState } from 'react'
import Dropdown from '@/components/ui/Dropdown'
import Icon from '@/components/ui/Icon'
import { Menu } from '@headlessui/react'
import UserAvatar from '@/assets/images/all-img/user.png'
import { Logout } from '@/components/partials/header/Tools/Logout'

const ProfileLabel: React.FC = () => {
  return (
    <div className='flex items-center'>
      <div className='flex-1 ltr:mr-[10px] rtl:ml-[10px]'>
        <div className='h-7 w-7 rounded-full lg:h-8 lg:w-8'>
          <img src={UserAvatar} alt='' className='block h-full w-full rounded-full object-cover' />
        </div>
      </div>
      <div className='hidden flex-none items-center overflow-hidden text-ellipsis whitespace-nowrap text-sm font-normal text-slate-600 dark:text-white lg:flex'>
        <span className='block w-[85px] overflow-hidden text-ellipsis whitespace-nowrap'>Albert Flores</span>
        <span className='inline-block text-base ltr:ml-[10px] rtl:mr-[10px]'>
          <Icon icon='heroicons-outline:chevron-down'></Icon>
        </span>
      </div>
    </div>
  )
}

const Profile: React.FC = () => {
  const [logoutModalActive, setLogoutModalActive] = useState(false)

  const profileMenu: any = [
    {
      label: 'Profile',
      icon: 'heroicons-outline:user',

      action: () => {
        console.log('profile')
      }
    },
    {
      label: 'Chat',
      icon: 'heroicons-outline:chat',
      action: () => {
        console.log('chat')
      }
    },
    {
      label: 'Email',
      icon: 'heroicons-outline:mail',
      action: () => {
        console.log('email')
      }
    },
    {
      label: 'Todo',
      icon: 'heroicons-outline:clipboard-check',
      action: () => {
        console.log('todo')
      }
    },
    {
      label: 'Settings',
      icon: 'heroicons-outline:cog',
      action: () => {
        console.log('settings')
      }
    },
    {
      label: 'Price',
      icon: 'heroicons-outline:credit-card',
      action: () => {
        console.log('price')
      }
    },
    {
      label: 'Faq',
      icon: 'heroicons-outline:information-circle',
      action: () => {
        console.log('faq')
      }
    },
    {
      label: 'Logout',
      icon: 'heroicons-outline:login',
      action: () => setLogoutModalActive(true)
    }
  ]

  return (
    <>
      {logoutModalActive && <Logout onClose={() => setLogoutModalActive(false)} />}
      <Dropdown label={<ProfileLabel />} classMenuItems='w-[180px] top-[58px]'>
        {profileMenu.map((item, index) => (
          <Menu.Item key={index}>
            {({ active }) => (
              <div
                onClick={() => item.action()}
                className={`${
                  active
                    ? 'bg-slate-100 text-slate-900 dark:bg-slate-600 dark:bg-opacity-50 dark:text-slate-300'
                    : 'text-slate-600 dark:text-slate-300'
                } block     ${item.hasDivider ? 'border-t border-slate-100 dark:border-slate-700' : ''}`}
              >
                <div className={`block cursor-pointer px-4 py-2`}>
                  <div className='flex items-center'>
                    <span className='block text-xl ltr:mr-3 rtl:ml-3'>
                      <Icon icon={item.icon} />
                    </span>
                    <span className='block text-sm'>{item.label}</span>
                  </div>
                </div>
              </div>
            )}
          </Menu.Item>
        ))}
      </Dropdown>
    </>
  )
}

export default Profile
