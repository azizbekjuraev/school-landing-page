import React from 'react'
import Radio from '@/components/ui/Radio'
import useNavbarType from '@/hooks/useNavbarType'

interface Navbar {
  label: string
  value: string
}

const NavType: React.FC = () => {
  const [navbarType, setNavbarType] = useNavbarType()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNavbarType(e.target.value)
  }
  const navTypes: Navbar[] = [
    {
      label: 'Sticky',
      value: 'sticky'
    },
    {
      label: 'Static',
      value: 'static'
    },
    {
      label: 'Floating',
      value: 'floating'
    },
    {
      label: 'Hidden',
      value: 'hidden'
    }
  ]

  return (
    <div>
      <h4 className='mb-2 text-base font-normal text-slate-600 dark:text-slate-300'>Navbar Type</h4>
      <div className='grid grid-cols-1 gap-3 md:grid-cols-4'>
        {navTypes?.map((item, index) => (
          <Radio
            key={index}
            label={item.label}
            name='navbarType'
            value={item.value}
            checked={navbarType === item.value}
            onChange={handleChange}
            className='h-4 w-4'
          />
        ))}
      </div>
    </div>
  )
}

export default NavType
