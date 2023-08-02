import React, { Fragment } from 'react'
import Icon from '@/components/ui/Icon'
import { useSelector, useDispatch } from 'react-redux'
import { Transition } from '@headlessui/react'
import { handleCustomizer } from '@/store/layout'
import SimpleBar from 'simplebar-react'
import Semidark from './Tools/Semidark'
import RtlSwicth from './Tools/Rtl'
import Skin from './Tools/Skin'
import Theme from './Tools/Theme'
import ContentWidth from './Tools/ContentWidth'
import Menulayout from './Tools/Menulayout'
import MenuClose from './Tools/MenuClose'
import MenuHidden from './Tools/MenuHidden'
import NavbarType from './Tools/NavbarType'
import FooType from './Tools/FooterType'
import useWidth from '@/hooks/useWidth'
import { RootState } from '@/store'

const Setings: React.FC = () => {
  const isOpen = useSelector((state: RootState) => state.layout.customizer)
  const dispatch = useDispatch()
  // ** Toggles  Customizer Open
  const setCustomizer = val => dispatch(handleCustomizer(val))

  const { width, breakpoints } = useWidth()

  return (
    <div>
      {!isOpen && (
        <span
          className='fixed top-1/2 z-[888] flex translate-y-1/2 rotate-90 transform cursor-pointer items-center bg-slate-800 px-2 py-2 text-sm font-medium text-slate-50 shadow-deep ltr:right-0 ltr:rounded-b rtl:left-0 rtl:rounded-t dark:bg-slate-700 dark:text-slate-300 ltr:md:right-[-32px] rtl:md:left-[-32px]'
          onClick={() => setCustomizer(true)}
        >
          <Icon icon='clarity:settings-line' className='animate-spin text-lg text-slate-50' />
          <span className='hidden ltr:ml-2 rtl:mr-2 md:inline-block'>Settings</span>
        </span>
      )}

      <div
        className={`
        setting-wrapper fixed top-0 z-[9999] h-screen w-[300px] border
         border-slate-200 bg-white pb-[100px] shadow-base2  transition-all duration-150 ltr:right-0
          rtl:left-0 dark:border-slate-700 dark:bg-slate-800 dark:shadow-base3 md:w-[400px] md:pb-6
          ${
            isOpen
              ? 'visible translate-x-0 opacity-100'
              : 'invisible opacity-0 ltr:translate-x-full rtl:-translate-x-full'
          }
        `}
      >
        <SimpleBar className='h-full px-6'>
          <header className='-mx-6 mb-6 flex items-center justify-between border-b border-slate-100 px-6 py-[15px] dark:border-slate-700'>
            <div>
              <span className='block text-xl font-medium text-slate-900 dark:text-[#eee]'>Theme customizer</span>
              <span className='block text-sm font-light text-[#68768A] dark:text-[#eee]'>
                Customize & Preview in Real Time
              </span>
            </div>
            <div
              className='cursor-pointer text-2xl text-slate-800 dark:text-slate-200'
              onClick={() => setCustomizer(false)}
            >
              <Icon icon='heroicons-outline:x' />
            </div>
          </header>
          <div className=' space-y-4'>
            <Skin />
            <Theme />
            <Semidark />
            <hr className='-mx-6 border-slate-200 dark:border-slate-700' />

            <div>
              <RtlSwicth />
            </div>
            <hr className='-mx-6 border-slate-200 dark:border-slate-700' />
            <ContentWidth />
            {width >= breakpoints.xl && <Menulayout />}

            <div className='pt-4'>
              <MenuClose />
            </div>
            <div className='pt-2'>
              <MenuHidden />
            </div>
            <hr className='-mx-6 border-slate-200 dark:border-slate-700' />
            <NavbarType />
            <FooType />
          </div>
        </SimpleBar>
      </div>

      <Transition as={Fragment} show={isOpen}>
        <div className='overlay fixed inset-0 z-[999] bg-white bg-opacity-0' onClick={() => setCustomizer(false)}></div>
      </Transition>
    </div>
  )
}

export default Setings
