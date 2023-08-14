import { useState } from 'react'
import { navbarData } from '../landingData'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [toggle, setToggle] = useState(false)

  const showNav = () => {
    setToggle(!toggle)
  }

  return (
    <nav className='  flex w-full items-center '>
      <div className='flex w-full flex-wrap items-center justify-between md:flex-nowrap'>
        <h1 className='text-black cursor-pointer text-xl font-bold'>School</h1>

        <button className='ring-black flex justify-end rounded ring-1 md:hidden' onClick={showNav}>
          <i className=' hover:text-black flex h-9 w-9 items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
            </svg>
          </i>
        </button>

        <ul
          className={`${
            toggle ? ' flex' : ' hidden'
          } w-full flex-col items-center justify-center first:mt-2 md:flex md:w-auto md:flex-row md:space-x-10`}
        >
          {navbarData.map((link, index) => {
            return (
              <li key={index} className={link.cname}>
                <Link className='hover:text-sky-500' to={link.href} onClick={showNav}>
                  {link.title}
                </Link>
              </li>
            )
          })}
        </ul>
        <button
          className={`${toggle ? ' flex' : ' hidden'} mx-auto mt-4 h-[44px] w-[168px] items-center justify-center
                rounded-xl
                bg-[#2E46C6] p-2 px-1 font-medium text-[#fff] hover:bg-gray-300 md:mx-0 md:mt-0 md:flex`}
        >
          Connect
        </button>
      </div>
    </nav>
  )
}
