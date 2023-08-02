import { useRef, useEffect, useState } from 'react'

import Navmenu from './Navmenu'
import { menuItems } from '@/constant/data'
import SimpleBar from 'simplebar-react'
import useSemiDark from '@/hooks/useSemiDark'
import useSkin from '@/hooks/useSkin'
import useDarkMode from '@/hooks/useDarkMode'
import { Link } from 'react-router-dom'
import useMobileMenu from '@/hooks/useMobileMenu'
import Icon from '@/components/ui/Icon'

// import images
import MobileLogo from '@/assets/images/logo/logo-c.svg'
import MobileLogoWhite from '@/assets/images/logo/logo-c-white.svg'
import svgRabitImage from '@/assets/images/svg/rabit.svg'

const MobileMenu: React.FC<{ className?: string }> = ({ className = 'custom-class' }) => {
  const scrollableNodeRef = useRef<HTMLDivElement>(null)
  const [scroll, setScroll] = useState<boolean>(false)
  useEffect(() => {
    const handleScroll = () => {
      // @ts-ignore
      if (scrollableNodeRef.current?.scrollTop > 0) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    scrollableNodeRef.current?.addEventListener('scroll', handleScroll)
    return scrollableNodeRef.current?.removeEventListener('scroll', handleScroll)
  }, [])

  const [isSemiDark] = useSemiDark()
  // skin
  const [skin] = useSkin()
  const [isDark] = useDarkMode()
  const [mobileMenu, setMobileMenu] = useMobileMenu()
  return (
    <div className={`${className} fixed  top-0 h-full w-[248px] bg-white  shadow-lg   dark:bg-slate-800`}>
      <div className='logo-segment z-[9] flex h-[85px] items-center justify-between bg-white px-4  dark:bg-slate-800 '>
        <Link to='/dashboard'>
          <div className='flex items-center space-x-4'>
            <div className='logo-icon'>
              {!isDark && !isSemiDark ? <img src={MobileLogo} alt='' /> : <img src={MobileLogoWhite} alt='' />}
            </div>
            <div>
              <h1 className='text-xl font-semibold text-slate-900 dark:text-slate-100'>Template</h1>
            </div>
          </div>
        </Link>
        <button
          type='button'
          onClick={() => setMobileMenu(!mobileMenu)}
          className='cursor-pointer text-2xl text-slate-900 dark:text-white'
        >
          <Icon icon='heroicons:x-mark' />
        </button>
      </div>

      <div
        className={`nav-shadow  pointer-events-none absolute top-[80px] z-[1] h-[60px] w-full transition-all duration-200 ${
          scroll ? ' opacity-100' : ' opacity-0'
        }`}
      ></div>
      <SimpleBar className='sidebar-menu h-[calc(100%-80px)] px-4' scrollableNodeProps={{ ref: scrollableNodeRef }}>
        <Navmenu menus={menuItems} />
        <div className='relative mb-24 mt-24 rounded-2xl bg-slate-900 p-4 text-center text-white lg:mb-10'>
          <img src={svgRabitImage} alt='' className='relative mx-auto -mt-[73px]' />
          <div className='mx-auto mt-6 max-w-[160px]'>
            <div className='widget-title'>Unlimited Access</div>
            <div className='text-xs font-light'>Upgrade your system to business plan</div>
          </div>
          <div className='mt-6'>
            <button className='btn btn-sm block w-full bg-white text-slate-900 hover:bg-opacity-80'>Upgrade</button>
          </div>
        </div>
      </SimpleBar>
    </div>
  )
}

export default MobileMenu
