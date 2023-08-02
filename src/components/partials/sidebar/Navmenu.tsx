import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Collapse } from 'react-collapse'
import Icon from '@/components/ui/Icon'
import { useDispatch } from 'react-redux'

interface NavmenuProps {
  menus: {
    link?: string
    icon: string
    title: string
    badge?: string
    child?: { childlink: string; childtitle: string }[]
    isHeadr?: boolean
  }[]
}

const Navmenu: React.FC<NavmenuProps> = ({ menus }) => {
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null)

  const toggleSubmenu = (i: number) => {
    if (activeSubmenu === i) {
      setActiveSubmenu(null)
    } else {
      setActiveSubmenu(i)
    }
  }

  const location = useLocation()
  const locationName = location.pathname.replace('/', '')
  const dispatch = useDispatch()
  useEffect(() => {
    let submenuIndex: number | null = null
    menus.map((item, i) => {
      if (!item.child) return
      if (item.link === locationName) {
        submenuIndex = null
      } else {
        const ciIndex = item.child.findIndex(ci => ci.childlink === locationName)
        if (ciIndex !== -1) {
          submenuIndex = i
        }
      }
    })
    document.title = `Template  | ${locationName}`

    setActiveSubmenu(submenuIndex)
  }, [location])

  return (
    <>
      <ul>
        {menus.map((item, i) => (
          <li
            key={i}
            className={` single-sidebar-menu 
              ${item.child ? 'item-has-children' : ''}
              ${activeSubmenu === i ? 'open' : ''}
              ${locationName === item.link ? 'menu-item-active' : ''}`}
          >
            {/* single menu with no childred*/}
            {!item.child && !item.isHeadr && (
              // @ts-ignore
              <NavLink className='menu-link' to={item.link}>
                <span className='menu-icon flex-grow-0'>
                  <Icon icon={item.icon} />
                </span>
                <div className='text-box flex-grow'>{item.title}</div>
                {item.badge && <span className='menu-badge'>{item.badge}</span>}
              </NavLink>
            )}
            {/* only for menulabel */}
            {item.isHeadr && !item.child && <div className='menulabel'>{item.title}</div>}
            {/*    !!sub menu parent   */}
            {item.child && (
              <div
                className={`menu-link ${activeSubmenu === i ? 'parent_active not-collapsed' : 'collapsed'}`}
                onClick={() => toggleSubmenu(i)}
              >
                <div className='flex flex-1 items-start'>
                  <span className='menu-icon'>
                    <Icon icon={item.icon} />
                  </span>
                  <div className='text-box'>{item.title}</div>
                </div>
                <div className='flex-0'>
                  <div
                    className={`menu-arrow transform transition-all duration-300 ${
                      activeSubmenu === i ? ' rotate-90' : ''
                    }`}
                  >
                    <Icon icon='heroicons-outline:chevron-right' />
                  </div>
                </div>
              </div>
            )}
            <Collapse isOpened={activeSubmenu === i}>
              <ul className='sub-menu '>
                {item.child?.map((subItem, j) => (
                  <li key={j} className='mb-4 block pl-4 pr-1 first:mt-4'>
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
                  </li>
                ))}
              </ul>
            </Collapse>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Navmenu
