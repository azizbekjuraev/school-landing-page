import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Icon from '@/components/ui/Icon'

const SlideModal = ({
  activeModal,
  onClose,
  className,
  noFade,
  uncontrol,
  disableBackdrop,
  width = 'max-w-xl',
  children,
  footerContent,
  centered,
  scrollContent,
  themeClass = 'bg-slate-900 dark:bg-slate-800 dark:border-b dark:border-slate-700',
  title = 'Slide-in Modal',
  label = 'Slide-in Modal',
  labelClass,
  ref
}) => {
  const [showModal, setShowModal] = useState(false)

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(!showModal)
  }
  const returnNull = () => {
    return null
  }

  return (
    <>
      {uncontrol ? (
        <>
          <button type='button' onClick={openModal} className={`btn ${labelClass}`}>
            {label}
          </button>
          <Transition appear show={showModal} as={Fragment}>
            <Dialog
              as='div'
              className='fixed inset-0 z-[99999] overflow-hidden'
              onClose={!disableBackdrop ? closeModal : returnNull}
            >
              {!disableBackdrop && (
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
                </Transition.Child>
              )}

              <div className={`fixed inset-0 flex items-center justify-end overflow-hidden`}>
                <Transition.Child
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'
                >
                  <div className={`w-screen ${width}`}>
                    <Dialog.Panel className={`flex h-full flex-col bg-white shadow-xl ${className}`}>
                      <div className={`flex items-center justify-between px-4 py-6 sm:px-6 ${themeClass}`}>
                        <h2 className='text-base font-medium capitalize leading-6 tracking-wider text-white'>
                          {title}
                        </h2>
                        <button onClick={closeModal} className='text-[22px]'>
                          <Icon icon='heroicons-outline:x' />
                        </button>
                      </div>
                      <div className={`px-6 py-8 ${scrollContent ? 'max-h-[400px] overflow-y-auto' : ''}`}>
                        {children}
                      </div>
                      {footerContent && (
                        <div className='flex justify-end space-x-3 border-t border-slate-100 px-4 py-3 dark:border-slate-700'>
                          {footerContent}
                        </div>
                      )}
                    </Dialog.Panel>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </>
      ) : (
        <>
          <button type='button' onClick={openModal} className={`btn ${labelClass}`}>
            {label}
          </button>
          <Transition appear show={showModal} as={Fragment}>
            <Dialog
              as='div'
              className='fixed inset-0 z-[99999] overflow-hidden'
              onClose={!disableBackdrop ? closeModal : returnNull}
            >
              {!disableBackdrop && (
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
                </Transition.Child>
              )}

              <div className={`fixed inset-0 flex items-center justify-end overflow-hidden`}>
                <Transition.Child
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'
                >
                  <div className={`w-screen ${width}`}>
                    <Dialog.Panel className={`flex h-full flex-col bg-white shadow-xl ${className}`}>
                      <div className={`flex items-center justify-between px-4 py-6 sm:px-6 ${themeClass}`}>
                        <h2 className='text-base font-medium capitalize leading-6 tracking-wider text-white'>
                          {title}
                        </h2>
                        <button onClick={closeModal} className='text-[22px]'>
                          <Icon icon='heroicons-outline:x' />
                        </button>
                      </div>
                      <div className={`px-6 py-8 ${scrollContent ? 'max-h-[400px] overflow-y-auto' : ''}`}>
                        {children}
                      </div>
                      {footerContent && (
                        <div className='flex justify-end space-x-3 border-t border-slate-100 px-4 py-3 dark:border-slate-700'>
                          {footerContent}
                        </div>
                      )}
                    </Dialog.Panel>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </>
      )}
    </>
  )
}

export default SlideModal
