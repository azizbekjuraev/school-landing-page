import React from 'react'
import useMonoChrome from '@/hooks/useMonoChrome'
import Icon from '@/components/ui/Icon'

const MonoChrome: React.FC = () => {
  const [isMonoChrome, setMonoChrome] = useMonoChrome()
  return (
    <span>
      <div
        className='flex cursor-pointer flex-col items-center justify-center rounded-full text-[20px] text-slate-900 dark:text-white lg:h-[32px] lg:w-[32px] lg:bg-slate-100 lg:dark:bg-slate-900'
        onClick={() => setMonoChrome(!isMonoChrome)}
      >
        <Icon icon='mdi:palette-outline' />
      </div>
    </span>
  )
}

export default MonoChrome
