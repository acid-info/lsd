import clsx from 'clsx'
import uniqueId from 'lodash/uniqueId'
import React, { useRef } from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { useInput } from '../../utils/useInput'
import { IconButton } from '../IconButton'
import { CloseIcon, ErrorIcon } from '../Icons'
import { Typography, TypographyComponent, TypographyProps } from '../Typography'
import styles from './TextField.module.css'

export type TextFieldProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'value'> &
  Pick<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    size?: 'large' | 'medium' | 'small'
    icon?: React.ReactNode
    error?: boolean
    errorIcon?: boolean
    clearButton?: boolean
    disabled?: boolean
    supportingText?: string
    value?: string
    defaultValue?: string
    placeholder?: string
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
    variant?: 'outlined' | 'underlined'
    label?: React.ReactNode
    labelProps?: Partial<TypographyProps<'label'> & { className?: string }>
  }

function TextField({
  size = 'large',
  label,
  icon,
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
  labelProps = {},
  variant = 'underlined',
  ...props
}: TextFieldProps) {
  const commonProps = useCommonProps(props)
  const ref = useRef<HTMLInputElement>(null)
  const input = useInput({
    defaultValue,
    value,
    onChange,
    ref: ref as React.RefObject<HTMLInputElement>,
  })

  const onCancel = () => input.setValue('')

  const inputId = inputProps.id || uniqueId('TextField-')

  return (
    <div
      aria-disabled={disabled ? 'true' : 'false'}
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        props.className,
        styles['root-textField'],
        styles[size],
        disabled && styles.disabled,
        error && styles.error,
        variant === 'outlined' ? styles.outlined : styles.underlined,
      )}
    >
      {label && (
        <Typography
          variant="label2"
          component="label"
          htmlFor={inputId}
          {...labelProps}
          className={clsx(styles.label, labelProps.className)}
        >
          {label}
        </Typography>
      )}
      <div className={styles.inputContainer}>
        <input
          id={inputId}
          placeholder={placeholder}
          ref={ref}
          value={input.value}
          onChange={input.onChange}
          {...inputProps}
          className={clsx(inputProps.className, styles.input)}
        />
        {error && errorIcon ? (
          <ErrorIcon color="primary" className={styles.icon} />
        ) : clearButton && input.filled ? (
          <IconButton
            disabled={disabled}
            onClick={() => !disabled && onCancel()}
            aria-label="clear"
            className={styles.clearButton}
          >
            <CloseIcon color="primary" className={styles.icon} />
          </IconButton>
        ) : (
          icon
        )}
      </div>
      {supportingText && (
        <div className={clsx(styles.supportingText)}>
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

export { TextField }
