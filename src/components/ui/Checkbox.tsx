import React, { ChangeEvent } from 'react'
import CheckImage from '@/assets/images/icon/ck-white.svg'

interface CheckboxProps {
  id?: string
  disabled?: boolean
  label?: string
  value: boolean
  name?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  activeClass?: string
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  disabled,
  label,
  value,
  name,
  onChange,
  activeClass = 'ring-black-500  bg-slate-900 dark:bg-slate-700 dark:ring-slate-700'
}) => {
  return (
    <label
      className={`flex items-center ${disabled ? ' cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
      htmlFor={id}
    >
      <input type='checkbox' className='hidden' name={name} checked={value} onChange={onChange} disabled={disabled} />
      <span
        className={`relative inline-flex h-4 w-4 flex-none rounded border 
        border-slate-100 transition-all duration-150 ltr:mr-3 rtl:ml-3 dark:border-slate-800
        ${
          value
            ? activeClass + ' ring-2 ring-offset-2 dark:ring-offset-slate-800 '
            : 'bg-slate-100 dark:border-slate-600 dark:bg-slate-600'
        }
        `}
      >
        {value && <img src={CheckImage} alt='' className='m-auto block h-[10px] w-[10px]' />}
      </span>
      <span className='text-sm capitalize leading-6 text-slate-500 dark:text-slate-400'>{label}</span>
    </label>
  )
}

export default Checkbox
