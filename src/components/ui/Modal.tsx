import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import Icon from '@/components/ui/Icon'

type Props = {
  activeModal: boolean
  onClose: () => void
  noFade?: boolean
  disableBackdrop?: boolean
  className?: string
  children: ReactNode
  footerContent?: ReactNode
  centered?: boolean
  scrollContent?: string
  themeClass?: string
  title?: string
  uncontrol?: boolean
  label?: string
  labelClass?: string
  onOpen?: () => void
}

const Modal = ({
  activeModal,
  onClose,
  noFade,
  disableBackdrop,
  className = 'max-w-xl',
  children,
  footerContent,
  centered,
  scrollContent,
  themeClass = 'bg-slate-900 dark:bg-slate-800 dark:border-b dark:border-slate-700',
  title = 'Basic Modal',
  uncontrol,
  label = 'Basic Modal',
  labelClass,
  onOpen
}: Props) => {
  const returnNull = () => {
    return null
  }

  return (
    <>
      {uncontrol ? (
        <>
          <button type='button' onClick={onOpen} className={`btn ${labelClass}`}>
            {label}
          </button>
          <Transition appear show={activeModal} as={Fragment}>
            <Dialog as='div' className='relative z-[99999]' onClose={!disableBackdrop ? onClose : returnNull}>
              {!disableBackdrop && (
                <Transition.Child
                  as={Fragment}
                  enter={noFade ? '' : 'duration-300 ease-out'}
                  enterFrom={noFade ? '' : 'opacity-0'}
                  enterTo={noFade ? '' : 'opacity-100'}
                  leave={noFade ? '' : 'duration-200 ease-in'}
                  leaveFrom={noFade ? '' : 'opacity-100'}
                  leaveTo={noFade ? '' : 'opacity-0'}
                >
                  <div className='fixed inset-0 bg-slate-900/50 backdrop-blur-sm backdrop-filter' />
                </Transition.Child>
              )}

              <div className='fixed inset-0 overflow-y-auto'>
                <div
                  className={`flex min-h-full justify-center p-6 text-center ${
                    centered ? 'items-center' : 'items-start '
                  }`}
                >
                  <Transition.Child
                    as={Fragment}
                    enter={noFade ? '' : 'duration-300  ease-out'}
                    enterFrom={noFade ? '' : 'opacity-0 scale-95'}
                    enterTo={noFade ? '' : 'opacity-100 scale-100'}
                    leave={noFade ? '' : 'duration-200 ease-in'}
                    leaveFrom={noFade ? '' : 'opacity-100 scale-100'}
                    leaveTo={noFade ? '' : 'opacity-0 scale-95'}
                  >
                    <Dialog.Panel
                      className={`transition-alll w-full transform overflow-hidden
                 rounded-md bg-white text-left align-middle shadow-xl dark:bg-slate-800 ${className}`}
                    >
                      <div
                        className={`relative flex justify-between overflow-hidden px-5 py-4 text-white  ${themeClass}`}
                      >
                        <h2 className='text-base font-medium capitalize leading-6 tracking-wider text-white'>
                          {title}
                        </h2>
                        <button onClick={onClose} className='text-[22px]'>
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
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
      ) : (
        <Transition appear show={activeModal} as={Fragment}>
          <Dialog as='div' className='relative z-[99999]' onClose={onClose}>
            <Transition.Child
              as={Fragment}
              enter={noFade ? '' : 'duration-300 ease-out'}
              enterFrom={noFade ? '' : 'opacity-0'}
              enterTo={noFade ? '' : 'opacity-100'}
              leave={noFade ? '' : 'duration-200 ease-in'}
              leaveFrom={noFade ? '' : 'opacity-100'}
              leaveTo={noFade ? '' : 'opacity-0'}
            >
              {!disableBackdrop && <div className='fixed inset-0 bg-slate-900/50 backdrop-blur-sm backdrop-filter' />}
            </Transition.Child>

            <div className='fixed inset-0 overflow-y-auto'>
              <div
                className={`flex min-h-full justify-center p-6 text-center ${
                  centered ? 'items-center' : 'items-start '
                }`}
              >
                <Transition.Child
                  as={Fragment}
                  enter={noFade ? '' : 'duration-300  ease-out'}
                  enterFrom={noFade ? '' : 'opacity-0 scale-95'}
                  enterTo={noFade ? '' : 'opacity-100 scale-100'}
                  leave={noFade ? '' : 'duration-200 ease-in'}
                  leaveFrom={noFade ? '' : 'opacity-100 scale-100'}
                  leaveTo={noFade ? '' : 'opacity-0 scale-95'}
                >
                  <Dialog.Panel
                    className={`transition-alll w-full transform overflow-hidden
                 rounded-md bg-white text-left align-middle shadow-xl dark:bg-slate-800 ${className}`}
                  >
                    <div
                      className={`relative flex justify-between overflow-hidden px-5 py-4 text-white  ${themeClass}`}
                    >
                      <h2 className='text-base font-medium capitalize leading-6 tracking-wider text-white'>{title}</h2>
                      <button onClick={onClose} className='text-[22px]'>
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
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  )
}

export default Modal
