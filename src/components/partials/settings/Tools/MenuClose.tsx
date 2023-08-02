import React from 'react'
import Switch from '@/components/ui/Switch'
import useSidebar from '@/hooks/useSidebar'

const MenuClose: React.FC = () => {
  const [collapsed, setMenuCollapsed] = useSidebar()
  return (
    <div className=' flex justify-between'>
      <div className='text-base font-normal text-slate-600 dark:text-slate-300'>Menu Collapsed</div>
      <Switch value={collapsed} onChange={() => setMenuCollapsed(!collapsed)} id='semi_nav_tools2' />
    </div>
  )
}

export default MenuClose
