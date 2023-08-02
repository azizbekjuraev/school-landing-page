import React, { useEffect, Suspense, Fragment, useRef } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '@/components/partials/header'
import Sidebar from '@/components/partials/sidebar'
import Settings from '@/components/partials/settings'
import useWidth from '@/hooks/useWidth'
import useSidebar from '@/hooks/useSidebar'
import useContentWidth from '@/hooks/useContentWidth'
import useMenulayout from '@/hooks/useMenulayout'
import useMenuHidden from '@/hooks/useMenuHidden'
import Footer from '@/components/partials/footer'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import MobileMenu from '../components/partials/sidebar/MobileMenu'
import useMobileMenu from '@/hooks/useMobileMenu'
import MobileFooter from '@/components/partials/footer/MobileFooter'
import Loading from '@/components/Loading'
import { motion, AnimatePresence } from 'framer-motion'
import Cookies from 'js-cookie'

const Layout: React.FC = () => {
  const { width, breakpoints } = useWidth()
  const [collapsed] = useSidebar()
  const navigate = useNavigate()
  const token = Cookies.get('token')

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [token, navigate])

  const switchHeaderClass = (): string => {
    if (menuType === 'horizontal' || menuHidden) {
      return 'ltr:ml-0 rtl:mr-0'
    } else if (collapsed) {
      return 'ltr:ml-[72px] rtl:mr-[72px]'
    } else {
      return 'ltr:ml-[248px] rtl:mr-[248px]'
    }
  }
  // content width
  const [contentWidth] = useContentWidth()
  const [menuType] = useMenulayout()
  const [menuHidden] = useMenuHidden()
  // mobile menu
  const [mobileMenu, setMobileMenu] = useMobileMenu()
  const nodeRef = useRef(null)

  return (
    <>
      <Header className={width > breakpoints.xl ? switchHeaderClass() : ''} />
      {menuType === 'vertical' && width > breakpoints.xl && !menuHidden && <Sidebar />}

      <MobileMenu
        className={`${
          width < breakpoints.xl && mobileMenu
            ? 'visible left-0 z-[9999]  opacity-100'
            : 'invisible left-[-300px] z-[-999]  opacity-0 '
        }`}
      />
      {/* mobile menu overlay*/}
      {width < breakpoints.xl && mobileMenu && (
        <div
          className='overlay fixed inset-0 z-[999] bg-slate-900/50 opacity-100 backdrop-blur-sm backdrop-filter'
          onClick={() => setMobileMenu(false)}
        ></div>
      )}
      {/*<Settings />*/}
      <div className={`content-wrapper transition-all duration-150 ${width > 1280 ? switchHeaderClass() : ''}`}>
        {/* md:min-h-screen will h-full*/}
        <div className='page-content   page-min-height  '>
          <div className={contentWidth === 'boxed' ? 'container mx-auto' : 'container-fluid'}>
            <Suspense fallback={<Loading />}>
              <motion.div
                key={location.pathname}
                initial='pageInitial'
                animate='pageAnimate'
                exit='pageExit'
                variants={{
                  pageInitial: {
                    opacity: 0,
                    y: 50
                  },
                  pageAnimate: {
                    opacity: 1,
                    y: 0
                  },
                  pageExit: {
                    opacity: 0,
                    y: -50
                  }
                }}
                transition={{
                  type: 'tween',
                  ease: 'easeInOut',
                  duration: 0.5
                }}
              >
                <Breadcrumbs />
                {<Outlet />}
              </motion.div>
            </Suspense>
          </div>
        </div>
      </div>
      {width < breakpoints.md && <MobileFooter />}
      {width > breakpoints.md && <Footer className={width > breakpoints.xl ? switchHeaderClass() : ''} />}
    </>
  )
}

export default Layout
