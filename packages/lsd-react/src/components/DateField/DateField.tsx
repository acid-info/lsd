import clsx from 'clsx'
import React, { useRef } from 'react'
import { useInput } from '../../utils/useInput'
import { CloseIcon, ErrorIcon } from '../Icons'
import { Typography } from '../Typography'
import styles from './DateField.module.css'
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

function DateField({
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
}: DateFieldProps) {
  const commonProps = useCommonProps(props)
  const ref = useRef<HTMLInputElement>(null)
  const input = useInput({
    defaultValue,
    value,
    onChange,
    ref: ref as React.RefObject<HTMLInputElement>,
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
        styles['root-dateField'],
        styles[size],
        disabled && styles.disabled,
        error && styles.error,
      )}
    >
      {label && (
        <Typography
          htmlFor={inputId}
          className={styles.label}
          variant="label2"
          component="label"
        >
          {label}
        </Typography>
      )}
      <div
        className={clsx(
          styles.inputContainer,
          variant === 'outlined' ? styles.outlined : styles.underlined,
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
            styles.input,
            input.filled && styles.inputFilled,
          )}
          max={inputProps.max || '9999-12-31'}
        />
        {icon ? (
          <span
            className={styles.icon}
            onClick={() => !disabled && onIconClick && onIconClick()}
            ref={calendarIconRef}
          >
            {icon}
          </span>
        ) : error && errorIcon ? (
          <span className={styles.icon}>
            <ErrorIcon color="primary" />
          </span>
        ) : clearButton && input.filled ? (
          <span onClick={() => !disabled && onCancel()} className={styles.icon}>
            <CloseIcon color="primary" />
          </span>
        ) : (
          <span className={styles.noIcon} />
        )}
      </div>
      {supportingText && (
        <div className={clsx(styles.supportingText)}>
          <Typography variant={'label2'} component="p">
            {supportingText}
          </Typography>
        </div>
      )}
      {children}
    </div>
  )
}

export { DateField }
