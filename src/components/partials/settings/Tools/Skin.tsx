import React from 'react'
import Radio from '@/components/ui/Radio'
import useSkin from '@/hooks/useSkin'

const Skin:React.FC = () => {
  const [skin, setSkin] = useSkin('default')
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSkin(e.target.value)
  }
  return (
    <div>
      <h4 className='mb-2 text-base font-normal text-slate-600 dark:text-slate-300'>Skin</h4>
      <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
        <Radio
          label='Default'
          name='skin'
          value='default'
          checked={skin === 'default'}
          onChange={handleChange}
          className='h-4 w-4'
        />
        <Radio
          label='Bordered'
          name='skin'
          value='bordered'
          checked={skin === 'bordered'}
          onChange={handleChange}
          className='h-4 w-4'
        />
      </div>
    </div>
  )
}

export default Skin
