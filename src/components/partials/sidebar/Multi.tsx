import React from 'react'
import { Collapse } from 'react-collapse'
import { NavLink } from 'react-router-dom'

interface MultilevelProps {
  activeMultiMenu: number | null
  j: number
  subItem: { multi_menu?: { multiLink: string; multiTitle: string }[] }
}

const Multilevel: React.FC<MultilevelProps> = ({ activeMultiMenu, j, subItem }) => {
  return (
    <Collapse isOpened={activeMultiMenu === j}>
      <ul className='space-y-[14px] pl-4'>
        {subItem?.multi_menu?.map((item, i) => (
          <li key={i} className=' first:pt-[14px]'>
            <NavLink to={item.multiLink}>
              {({ isActive }) => (
                <span
                  className={`${
                    isActive ? ' text-black font-medium dark:text-white' : 'text-slate-600 dark:text-slate-300'
                  } flex items-center space-x-3 text-sm transition-all duration-150`}
                >
                  <span
                    className={`${
                      isActive
                        ? ' bg-slate-900 ring-4 ring-black-500 ring-opacity-[15%] dark:bg-slate-300 dark:ring-slate-300 dark:ring-opacity-20'
                        : ''
                    } inline-block h-2 w-2 flex-none rounded-full border border-slate-600 dark:border-white`}
                  ></span>
                  <span className='flex-1'>{item.multiTitle}</span>
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </Collapse>
  )
}

export default Multilevel
