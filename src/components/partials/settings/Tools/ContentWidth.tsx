import React from 'react'
import Radio from '@/components/ui/Radio'
import useContentWidth from '@/hooks/useContentWidth'

const CWidth: React.FC = () => {
  const [contentWidth, setContentWidth] = useContentWidth()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContentWidth(e.target.value)
  }

  return (
    <div>
      <h4 className='mb-2 text-base font-normal text-slate-600 dark:text-slate-300'>Content Width</h4>
      <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
        <Radio
          label='Full Width'
          name='cwidth'
          value='full'
          checked={contentWidth === 'full'}
          className='h-4 w-4'
          onChange={handleChange}
        />
        <Radio
          label='Boxed'
          name='cwidth'
          value='boxed'
          className='h-4 w-4'
          checked={contentWidth === 'boxed'}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default CWidth
