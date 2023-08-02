import React, { useState } from 'react'
import { Collapse } from 'react-collapse'
import { NavLink } from 'react-router-dom'
import Icon from '../../ui/Icon'
import Multilevel from './Multi'

interface SubmenuProps {
  activeSubmenu: number
  item: {
    child?: { multi_menu?: { multiLink: string; multiTitle: string }[]; childlink?: string; childtitle: string }[]
  }
  i: number
}

const Submenu: React.FC<SubmenuProps> = ({ activeSubmenu, item, i }) => {
  const [activeMultiMenu, setActiveMultiMenu] = useState<number | null>(null)
  const toggleMultiMenu = (j: number) => {
    if (activeMultiMenu === j) {
      setActiveMultiMenu(null)
    } else {
      setActiveMultiMenu(j)
    }
  }
  return (
    <Collapse isOpened={activeSubmenu === i}>
      <ul className='sub-menu  space-y-4  '>
        {item.child?.map((subItem, j) => (
          <li key={j} className='block pl-4 pr-1 first:pt-4  last:pb-4'>
            {subItem?.multi_menu ? (
              <div>
                <div
                  onClick={() => toggleMultiMenu(j)}
                  className={`${
                    activeMultiMenu ? ' text-black font-medium dark:text-white' : 'text-slate-600 dark:text-slate-300'
                  } flex cursor-pointer items-center space-x-3 text-sm transition-all duration-150`}
                >
                  <span
                    className={`${
                      activeMultiMenu
                        ? ' bg-slate-900 ring-4 ring-black-500 ring-opacity-[15%] dark:bg-slate-300 dark:ring-slate-300 dark:ring-opacity-20'
                        : ''
                    } inline-block h-2 w-2 flex-none rounded-full border border-slate-600 dark:border-white `}
                  ></span>
                  <span className='flex-1'>{subItem.childtitle}</span>
                  <span className='flex-none'>
                    <span
                      className={`menu-arrow transform transition-all duration-300 ${
                        activeMultiMenu === j ? ' rotate-90' : ''
                      }`}
                    >
                      <Icon icon='ph:caret-right' />
                    </span>
                  </span>
                </div>
                <Multilevel activeMultiMenu={activeMultiMenu} j={j} subItem={subItem} />
              </div>
            ) : (
              // @ts-ignore
              <NavLink to={subItem.childlink}>
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
                    <span className='flex-1'>{subItem.childtitle}</span>
                  </span>
                )}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </Collapse>
  )
}

export default Submenu
