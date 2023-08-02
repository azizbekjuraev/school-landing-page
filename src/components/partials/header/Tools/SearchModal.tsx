import { Dialog, Transition, Combobox } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Icon from '@/components/ui/Icon'

interface SearchItem {
  id: number
  name: string
}

const SearchModal: React.FC = () => {
  let [isOpen, setIsOpen] = useState<boolean>(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const [query, setQuery] = useState<string>(' ')
  const searchList: SearchItem[] = [
    {
      id: 1,
      name: 'What is Template ?'
    },
    {
      id: 2,
      name: 'Our Services'
    },
    {
      id: 3,
      name: 'Our Team'
    },
    {
      id: 4,
      name: 'Our Clients'
    },
    {
      id: 5,
      name: 'Our Partners'
    },
    {
      id: 6,
      name: 'Our Blog'
    },
    {
      id: 7,
      name: 'Our Contact'
    }
  ]
  const filteredsearchList = searchList.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <>
      <div>
        <button
          className='flex items-center space-x-3 px-1 text-lg text-slate-800 rtl:space-x-reverse dark:text-slate-300 xl:text-sm xl:text-slate-400'
          onClick={openModal}
        >
          <Icon icon='heroicons-outline:search' />
          <span className='hidden xl:inline-block'>Search... </span>
        </button>
      </div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog as='div' className='fixed inset-0 z-[9999] overflow-y-auto p-4 pt-20 md:pt-[25vh]' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='backdrop-brightness-10 fixed inset-0 bg-slate-900/60 backdrop-blur-sm backdrop-filter' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Dialog.Panel>
              <Combobox>
                <div className='relative'>
                  <div className='ring-gray-500-500 dark:ring-light divide-gray-500-300 dark:divide-light relative mx-auto max-w-xl divide-y rounded-md bg-white shadow-2xl ring-1 dark:bg-slate-800'>
                    <div className='flex items-center rounded-md  bg-white px-3 py-3 dark:bg-slate-800'>
                      <div className='flex-0  text-lg text-slate-700 ltr:pr-2 rtl:pl-2 dark:text-slate-300'>
                        <Icon icon='heroicons-outline:search' />
                      </div>
                      <Combobox.Input
                        className='w-full flex-1 border-none bg-transparent outline-none focus:outline-none dark:text-slate-200 dark:placeholder:text-slate-300'
                        placeholder='Search...'
                        onChange={event => setQuery(event.target.value)}
                      />
                    </div>
                    <Transition leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
                      <Combobox.Options className='max-h-40 overflow-y-auto py-2 text-sm'>
                        {filteredsearchList.length === 0 && query !== '' && (
                          <div>
                            <div className=' px-4 py-2 text-base'>
                              <p className='text-base text-slate-500 dark:text-white'>No result found</p>
                            </div>
                          </div>
                        )}

                        {filteredsearchList.map((item, i) => (
                          // @ts-ignore
                          <Combobox.Option key={i}>
                            {({ active }) => (
                              <div
                                className={`px-4 py-2 text-[15px] font-normal capitalize ${
                                  active
                                    ? 'bg-slate-900 text-white dark:bg-slate-600 dark:bg-opacity-60'
                                    : 'text-slate-900 dark:text-white'
                                }`}
                              >
                                <span>{item.name}</span>
                              </div>
                            )}
                          </Combobox.Option>
                        ))}
                      </Combobox.Options>
                    </Transition>
                  </div>
                </div>
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}

export default SearchModal
