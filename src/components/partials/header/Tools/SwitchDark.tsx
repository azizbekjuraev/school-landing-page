import React, { useEffect } from 'react'
import Icon from '@/components/ui/Icon'

import useDarkMode from '@/hooks/useDarkMode'

const SwitchDark: React.FC = () => {
  const [isDark, setDarkMode] = useDarkMode()

  return (
    <span>
      <div
        className='flex cursor-pointer flex-col items-center justify-center rounded-full text-[20px] text-slate-900 dark:text-white lg:h-[32px] lg:w-[32px] lg:bg-slate-100 lg:dark:bg-slate-900'
        onClick={() => setDarkMode(!isDark)}
      >
        {isDark ? <Icon icon='heroicons-outline:sun' /> : <Icon icon='heroicons-outline:moon' />}
      </div>
    </span>
  )
}

export default SwitchDark
