import React, { ChangeEvent } from 'react'
import Icon from '@/components/ui/Icon'

interface TextareaProps {
  label?: string
  placeholder?: string
  classLabel?: string
  className?: string
  classGroup?: string
  register?: any
  name?: string
  readonly?: boolean
  dvalue?: string
  error?: {
    message: string
  }
  icon?: string
  disabled?: boolean
  id?: string
  horizontal?: boolean
  validate?: string
  msgTooltip?: boolean
  description?: string
  cols?: number
  row?: number
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  classLabel = 'form-label',
  className = '',
  classGroup = '',
  register,
  name,
  readonly,
  dvalue,
  error,
  icon,
  disabled,
  id,
  horizontal,
  validate,
  msgTooltip,
  description,
  cols,
  row = 3,
  onChange,
  ...rest
}) => {
  return (
    <div
      className={`fromGroup  ${error ? 'has-error' : ''}  ${horizontal ? 'flex' : ''}  ${validate ? 'is-valid' : ''} `}
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
      <div className={`relative ${horizontal ? 'flex-1' : ''}`}>
        {name && (
          <textarea
            {...register(name)}
            {...rest}
            className={`${error ? ' has-error' : ' '} form-control py-2 ${className}  `}
            placeholder={placeholder}
            readOnly={readonly}
            disabled={disabled}
            id={id}
            cols={cols}
            rows={row}
            onChange={onChange}
          ></textarea>
        )}
        {!name && (
          <textarea
            className={`${error ? ' has-error' : ' '} form-control py-2 ${className}  `}
            placeholder={placeholder}
            readOnly={readonly}
            disabled={disabled}
            id={id}
            cols={cols}
            rows={row}
            onChange={onChange}
          ></textarea>
        )}

        {/* icon */}
        <div className='absolute top-1/2 flex -translate-y-1/2 space-x-1 text-xl ltr:right-[14px]  rtl:left-[14px] rtl:space-x-reverse'>
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

export default Textarea
