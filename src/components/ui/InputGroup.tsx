import React, { ChangeEvent, FocusEvent, useState } from 'react'
import Icon from '@/components/ui/Icon'
import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.us'

interface InputGroupProps {
  type?: string
  label?: string
  placeholder?: string
  classLabel?: string
  className?: string
  classGroup?: string
  name?: string
  readonly?: boolean
  value?: any
  error?: any
  icon?: string
  disabled?: boolean
  id?: string
  horizontal?: boolean
  validate?: string
  isMask?: boolean
  msgTooltip?: string
  description?: string
  hasicon?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
  merged?: boolean
  append?: React.ReactNode
  prepend?: React.ReactNode
  options?: any // Not sure about the type here
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void
  register?: any
}

const InputGroup: React.FC<InputGroupProps> = ({
  type,
  label,
  placeholder,
  classLabel = 'form-label',
  className = '',
  classGroup = '',
  register,
  name,
  readonly,
  value,
  error,
  icon,
  disabled,
  id,
  horizontal,
  validate,
  isMask,
  msgTooltip,
  description,
  hasicon,
  onChange,
  merged,
  append,
  prepend,
  options,
  onFocus,
  onBlur,
  ...rest
}) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div
      className={`  ${horizontal ? 'flex' : ''} 
      ${merged ? 'merged' : ''}  `}
    >
      {label && (
        <label
          htmlFor={id}
          className={`block capitalize ${classLabel}  ${
            horizontal ? 'flex-0 mr-6 w-[60px] break-words md:w-[100px]' : ''
          }`}
        >
          {label}
        </label>
      )}
      <div
        className={`inputGroup flex items-stretch 
      
        
    ${append ? 'has-append' : ''}
    ${prepend ? 'has-prepend' : ''}

    ${error ? 'is-invalid' : ''}  ${validate ? 'is-valid' : ''}
    
   
    ${horizontal ? 'flex-1' : ''}
      `}
      >
        {/* prepend*/}
        {prepend && (
          <span className='input-group-addon flex-none'>
            <div className='input-group-text  prepend-slot h-full'>{prepend}</div>
          </span>
        )}
        <div className='flex-1'>
          <div
            className={`fromGroup2 relative
          ${error ? 'has-error' : ''} 
           ${validate ? 'is-valid' : ''}
          `}
          >
            {name && !isMask && (
              <input
                name={name}
                type={type === 'password' && open === true ? 'text' : type}
                {...rest}
                className={`${
                  error ? ' has-error' : ' '
                } input-group-control block w-full py-2 focus:outline-none ${className}  `}
                placeholder={placeholder}
                readOnly={readonly}
                disabled={disabled}
                id={id}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            {!name && !isMask && (
              <input
                type={type === 'password' && open === true ? 'text' : type}
                className={`input-group-control block w-full py-2 focus:outline-none ${className}`}
                placeholder={placeholder}
                readOnly={readonly}
                disabled={disabled}
                onChange={onChange}
                id={id}
              />
            )}
            {name && isMask && (
              <Cleave
                {...register(name)}
                {...rest}
                placeholder={placeholder}
                options={options}
                className={`${error ? ' has-error' : ' '} input-group-control w-full py-2 ${className}  `}
                onFocus={onFocus}
                id={id}
                readOnly={readonly}
                disabled={disabled}
                onChange={onChange}
              />
            )}
            {!name && isMask && (
              <Cleave
                placeholder={placeholder}
                options={options}
                className={`${error ? ' has-error' : ' '} input-group-control w-full py-2 ${className}  `}
                onFocus={onFocus}
                id={id}
                readOnly={readonly}
                disabled={disabled}
                onChange={onChange}
              />
            )}
            {/* icon */}
            <div className='absolute top-1/2 flex -translate-y-1/2 space-x-1 text-xl ltr:right-[14px]  rtl:left-[14px] rtl:space-x-reverse'>
              {hasicon && (
                <span className='cursor-pointer text-secondary-500' onClick={handleOpen}>
                  {open && type === 'password' && <Icon icon='heroicons-outline:eye' />}
                  {!open && type === 'password' && <Icon icon='heroicons-outline:eye-off' />}
                </span>
              )}

              {error && (
                <span className='text-danger-500'>
                  <Icon icon='heroicons-outline:information-circle' />
                </span>
              )}
              {validate && (
                <span className='text-success-500'>
                  <Icon icon='bi:check-lg' />
                </span>
              )}
            </div>
          </div>
        </div>
        {/* append*/}
        {append && (
          <span className='input-group-addon right flex-none'>
            <div className='input-group-text  append-slot h-full'>{append}</div>
          </span>
        )}
      </div>
      {/* error and success message*/}
      {error && (
        <div
          className={` mt-2 ${
            msgTooltip
              ? ' inline-block rounded bg-danger-500 px-2 py-1 text-[10px] text-white'
              : ' block text-sm text-danger-500'
          }`}
        >
          {error.message}
        </div>
      )}
      {/* validated and success message*/}
      {validate && (
        <div
          className={` mt-2 ${
            msgTooltip
              ? ' inline-block rounded bg-success-500 px-2 py-1 text-[10px] text-white'
              : ' block text-sm text-success-500'
          }`}
        >
          {validate}
        </div>
      )}
      {/* only description */}
      {description && <span className='input-description'>{description}</span>}
    </div>
  )
}

export default InputGroup
