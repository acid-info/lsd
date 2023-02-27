import clsx from 'clsx'
import React, { useRef } from 'react'
import { useInput } from '../../utils/useInput'
import { IconButton } from '../IconButton'
import { CloseIcon, ErrorIcon } from '../Icons'
import { Typography } from '../Typography'
import { dateFieldClasses } from './DateField.classes'

export type DateFieldProps = Omit<
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
    icon?: React.ReactNode
    onIconClick?: () => void
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  }

export const DateField: React.FC<DateFieldProps> & {
  classes: typeof dateFieldClasses
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
  icon,
  onIconClick,
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
        dateFieldClasses.root,
        dateFieldClasses[size],
        disabled && dateFieldClasses.disabled,
        error && dateFieldClasses.error,
      )}
    >
      <div className={dateFieldClasses.inputContainer}>
        <input
          type="date"
          placeholder={placeholder}
          {...inputProps}
          ref={ref}
          value={input.value}
          onChange={input.onChange}
          className={clsx(inputProps.className, dateFieldClasses.input)}
        />
        {icon ? (
          <IconButton
            disabled={disabled}
            className={dateFieldClasses.iconButton}
            onClick={() => !disabled && onIconClick && onIconClick()}
          >
            {icon}
          </IconButton>
        ) : error && errorIcon ? (
          <ErrorIcon color="primary" className={dateFieldClasses.icon} />
        ) : clearButton && input.filled ? (
          <IconButton
            disabled={disabled}
            onClick={() => !disabled && onCancel()}
            aria-label="clear"
            className={dateFieldClasses.iconButton}
          >
            <CloseIcon color="primary" className={dateFieldClasses.icon} />
          </IconButton>
        ) : null}
      </div>
      {supportingText && (
        <div className={clsx(dateFieldClasses.supportingText)}>
          <Typography
            variant={size === 'large' ? 'label1' : 'label2'}
            component="p"
          >
            {supportingText}
          </Typography>
        </div>
      )}
      {children}
    </div>
  )
}

DateField.classes = dateFieldClasses
