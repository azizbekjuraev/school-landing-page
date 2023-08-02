import React from 'react'
import Radio from '@/components/ui/Radio'
import useMenuLayout from '@/hooks/useMenulayout'

const Menulayout: React.FC = () => {
  const [menuType, setMenuLayout] = useMenuLayout()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMenuLayout(e.target.value)
  }

  return (
    <div>
      <h4 className='mb-2 text-base font-normal text-slate-600 dark:text-slate-300'>Menu Layout</h4>
      <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
        <Radio
          label='Vertical'
          name='menulayout'
          value='vertical'
          checked={menuType === 'vertical'}
          onChange={handleChange}
          className='h-4 w-4'
        />
        <Radio
          label='Horizontal'
          name='menulayout'
          value='horizontal'
          checked={menuType === 'horizontal'}
          onChange={handleChange}
          className='h-4 w-4'
        />
      </div>
    </div>
  )
}

export default Menulayout
