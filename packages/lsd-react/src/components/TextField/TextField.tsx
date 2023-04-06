import clsx from 'clsx'
import React, { useRef } from 'react'
import { useInput } from '../../utils/useInput'
import { IconButton } from '../IconButton'
import { CloseIcon, ErrorIcon } from '../Icons'
import { Typography } from '../Typography'
import { textFieldClasses } from './TextField.classes'

export type TextFieldProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onChange' | 'value'
> &
  Pick<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    size?: 'large' | 'medium'
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
    variant?: 'outlined' | 'outlined-bottom'
  }

export const TextField: React.FC<TextFieldProps> & {
  classes: typeof textFieldClasses
} = ({
  size = 'large',
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
  variant = 'outlined-bottom',
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
        textFieldClasses.root,
        textFieldClasses[size],
        disabled && textFieldClasses.disabled,
        error && textFieldClasses.error,
        variant === 'outlined'
          ? textFieldClasses.outlined
          : textFieldClasses.outlinedBottom,
      )}
    >
      <div className={textFieldClasses.inputContainer}>
        <input
          placeholder={placeholder}
          {...inputProps}
          ref={ref}
          value={input.value}
          onChange={input.onChange}
          className={clsx(inputProps.className, textFieldClasses.input)}
        />
        {error && errorIcon ? (
          <ErrorIcon color="primary" className={textFieldClasses.icon} />
        ) : clearButton && input.filled ? (
          <IconButton
            disabled={disabled}
            onClick={() => !disabled && onCancel()}
            aria-label="clear"
            className={textFieldClasses.clearButton}
          >
            <CloseIcon color="primary" className={textFieldClasses.icon} />
          </IconButton>
        ) : (
          icon
        )}
      </div>
      {supportingText && (
        <div className={clsx(textFieldClasses.supportingText)}>
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

TextField.classes = textFieldClasses
