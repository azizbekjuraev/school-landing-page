import React, { Fragment, SelectHTMLAttributes } from 'react'
import Icon from '@/components/ui/Icon'

interface Option {
  value: string
  label: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  placeholder?: string
  classLabel?: string
  className?: string
  classGroup?: string
  register?: any
  name?: string
  readonly?: boolean
  value?: string
  error?: boolean
  icon?: any
  disabled?: boolean
  id?: string
  horizontal?: boolean
  validate?: boolean
  msgTooltip?: string
  description?: string
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  options?: (string | Option)[]
  defaultValue?: string
  size?: number
}

const Select: React.FC<SelectProps> = ({
  label,
  placeholder = 'Select Option',
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
  msgTooltip,
  description,
  onChange,
  options,
  defaultValue,
  size,
  ...rest
}) => {
  options = options || (Array(3).fill('option') as (string | Option)[])

  return (
    <div className={`fromGroup ${error ? 'has-error' : ''} ${horizontal ? 'flex' : ''} ${validate ? 'is-valid' : ''}`}>
      {label && (
        <label
          htmlFor={id}
          className={`block capitalize ${classLabel} ${
            horizontal ? 'flex-0 mr-6 w-[60px] break-words md:w-[100px]' : ''
          }`}
        >
          {label}
        </label>
      )}
      <div className={`relative ${horizontal ? 'flex-1' : ''}`}>
        {name && (
          <select
            onChange={onChange}
            {...(register && register(name))}
            {...rest}
            className={`${error ? 'has-error' : ''} form-control appearance-none py-2 ${className}`}
            placeholder={placeholder}
            disabled={disabled}
            id={id}
            value={value}
            size={size}
            defaultValue={defaultValue}
          >
            <option value='' disabled>
              {placeholder}
            </option>
            {options.map((option, i) => (
              <Fragment key={i}>
                {typeof option === 'object' ? (
                  <option key={i} value={option.value}>
                    {option.label}
                  </option>
                ) : (
                  <option key={i} value={option}>
                    {option}
                  </option>
                )}
              </Fragment>
            ))}
          </select>
        )}
        {!name && (
          <select
            onChange={onChange}
            className={`${error ? 'has-error' : ''} form-control appearance-none py-2 ${className}`}
            placeholder={placeholder}
            disabled={disabled}
            id={id}
            value={value}
            size={size}
            defaultValue={defaultValue}
            required
          >
            <option value='' disabled>
              {placeholder}
            </option>
            {options.map((option, i) => (
              <Fragment key={i}>
                {typeof option === 'object' ? (
                  <option key={i} value={option.value}>
                    {option.label}
                  </option>
                ) : (
                  <option key={i} value={option}>
                    {option}
                  </option>
                )}
              </Fragment>
            ))}
          </select>
        )}
      </div>
    </div>
  )
}

export default Select
