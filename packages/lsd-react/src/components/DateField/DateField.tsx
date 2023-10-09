import clsx from 'clsx'
import React, { useRef } from 'react'
import { useInput } from '../../utils/useInput'
import { CloseIcon, ErrorIcon } from '../Icons'
import { Typography } from '../Typography'
import { dateFieldClasses } from './DateField.classes'
import {
  CommonProps,
  useCommonProps,
  omitCommonProps,
} from '../../utils/useCommonProps'

export type DateFieldProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'value'> &
  Pick<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    label?: React.ReactNode
    size?: 'large' | 'medium' | 'small'
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
    variant?: 'outlined' | 'underlined'
    calendarIconRef?: React.RefObject<HTMLSpanElement>
  }

export const DateField: React.FC<DateFieldProps> & {
  classes: typeof dateFieldClasses
} = ({
  label,
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
  calendarIconRef,
  variant = 'underlined',
  ...props
}) => {
  const commonProps = useCommonProps(props)
  const ref = useRef<HTMLInputElement>(null)
  const input = useInput({
    defaultValue,
    value,
    onChange,
    ref,
  })

  const onCancel = () => input.setValue('')

  const inputId = inputProps?.id ?? (props.id || 'date-field') + '-input'

  return (
    <div
      aria-disabled={disabled ? 'true' : 'false'}
      {...props}
      className={clsx(
        { ...omitCommonProps(props) },
        props.className,
        commonProps.className,
        dateFieldClasses.root,
        dateFieldClasses[size],
        disabled && dateFieldClasses.disabled,
        error && dateFieldClasses.error,
      )}
    >
      {label && (
        <Typography
          htmlFor={inputId}
          className={dateFieldClasses.label}
          variant="label2"
          component="label"
        >
          {label}
        </Typography>
      )}
      <div
        className={clsx(
          dateFieldClasses.inputContainer,
          variant === 'outlined'
            ? dateFieldClasses.outlined
            : dateFieldClasses.underlined,
        )}
      >
        <input
          id={inputId}
          type="date"
          placeholder={placeholder}
          {...inputProps}
          ref={ref}
          value={input.value || ''}
          onChange={input.onChange}
          className={clsx(
            inputProps.className,
            dateFieldClasses.input,
            input.filled && dateFieldClasses.inputFilled,
          )}
          max={inputProps.max || '9999-12-31'}
        />
        {icon ? (
          <span
            className={dateFieldClasses.icon}
            onClick={() => !disabled && onIconClick && onIconClick()}
            ref={calendarIconRef}
          >
            {icon}
          </span>
        ) : error && errorIcon ? (
          <span className={dateFieldClasses.icon}>
            <ErrorIcon color="primary" />
          </span>
        ) : clearButton && input.filled ? (
          <span
            onClick={() => !disabled && onCancel()}
            className={dateFieldClasses.icon}
          >
            <CloseIcon color="primary" />
          </span>
        ) : (
          // Default case: just show and empty span on top of the browser's default icon.
          <span className={dateFieldClasses.noIcon} />
        )}
      </div>
      {supportingText && (
        <div className={clsx(dateFieldClasses.supportingText)}>
          <Typography variant={'label2'} component="p">
            {supportingText}
          </Typography>
        </div>
      )}
      {children}
    </div>
  )
}

DateField.classes = dateFieldClasses
