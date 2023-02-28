import clsx from 'clsx'
import React, { useRef } from 'react'
import { useInput } from '../../utils/useInput'
import { IconButton } from '../IconButton'
import { CloseIcon, ErrorIcon } from '../Icons'
import { Typography } from '../Typography'
import { datePickerClasses } from './DatePicker.classes'

export type DatePickerProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onChange' | 'value'
> &
  Pick<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    size?: 'large' | 'medium'
    error?: boolean
    errorIcon?: boolean
    clearButton?: boolean
    disabled?: boolean
    supportingText?: string
    value?: string
    defaultValue?: string
    placeholder?: string
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  }

export const DatePicker: React.FC<DatePickerProps> & {
  classes: typeof datePickerClasses
} = ({
  size = 'large',
  error = false,
  errorIcon = false,
  clearButton,
  supportingText,
  children,
  value,
  placeholder,
  defaultValue,
  disabled,
  onChange,
  inputProps = {},
  ...props
}) => {
  const ref = useRef<HTMLInputElement>(null)
  const input = useInput({ defaultValue, value, onChange, ref })

  const onCancel = () => input.setValue('')

  return (
    <div
      aria-disabled={disabled ? 'true' : 'false'}
      {...props}
      className={clsx(
        props.className,
        datePickerClasses.root,
        datePickerClasses[size],
        disabled && datePickerClasses.disabled,
        error && datePickerClasses.error,
      )}
    >
      <div className={datePickerClasses.inputContainer}>
        <input
          type="date"
          placeholder={placeholder}
          {...inputProps}
          ref={ref}
          value={input.value}
          onChange={input.onChange}
          className={clsx(inputProps.className, datePickerClasses.input)}
        />
        {error && errorIcon ? (
          <ErrorIcon color="primary" className={datePickerClasses.icon} />
        ) : clearButton && input.filled ? (
          <IconButton
            disabled={disabled}
            onClick={() => !disabled && onCancel()}
            aria-label="clear"
            className={datePickerClasses.clearButton}
          >
            <CloseIcon color="primary" className={datePickerClasses.icon} />
          </IconButton>
        ) : null}
      </div>
      {supportingText && (
        <div className={clsx(datePickerClasses.supportingText)}>
          <Typography
            variant={size === 'large' ? 'label1' : 'label2'}
            component="p"
          >
            {supportingText}
          </Typography>
        </div>
      )}
    </div>
  )
}

DatePicker.classes = datePickerClasses
