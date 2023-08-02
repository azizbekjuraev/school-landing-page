import React from 'react'
import Radio from '@/components/ui/Radio'
import useFooterType from '@/hooks/useFooterType'

interface FooterType {
  label: string
  value: string
}

const FooType: React.FC = () => {
  const [footerType, setFooterType] = useFooterType()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFooterType(e.target.value)
  }
  const fotypes: FooterType[] = [
    {
      label: 'Sticky',
      value: 'sticky'
    },
    {
      label: 'Static',
      value: 'static'
    },

    {
      label: 'Hidden',
      value: 'hidden'
    }
  ]

  return (
    <div>
      <h4 className='mb-2 text-base font-normal text-slate-600 dark:text-slate-300'>Footer Type</h4>
      <div className='grid grid-cols-1 gap-3 md:grid-cols-4'>
        {fotypes?.map((item, index) => (
          <Radio
            key={index}
            label={item.label}
            name='navbarType'
            value={item.value}
            checked={footerType === item.value}
            onChange={handleChange}
            className='h-4 w-4'
          />
        ))}
      </div>
    </div>
  )
}

export default FooType
