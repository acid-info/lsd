import clsx from 'clsx'
import React, { useRef } from 'react'
import { useInput } from '../../utils/useInput'
import { CheckIcon, CloseIcon, ErrorIcon } from '../Icons'
import { Typography } from '../Typography'
import { textFieldClasses } from './TextField.classes'

export type TextFieldProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onChange' | 'value'
> &
  Pick<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    size?: 'large' | 'medium'
    withIcon?: boolean
    error?: boolean
    disabled?: boolean
    supportingText?: string
    value?: string
    defaultValue?: string
    placeholder?: string
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  }

export const TextField: React.FC<TextFieldProps> & {
  classes: typeof textFieldClasses
} = ({
  size = 'large',
  withIcon = false,
  supportingText,
  error = false,
  children,
  value,
  placeholder,
  defaultValue,
  onChange,
  inputProps = {},
  ...props
}) => {
  const ref = useRef<HTMLInputElement>(null)
  const input = useInput({ defaultValue, value, onChange, ref })

  const onCancel = () => input.setValue('')

  return (
    <div
      className={clsx(
        props.className,
        textFieldClasses.root,
        textFieldClasses[size],
        props.disabled && textFieldClasses.disabled,
        withIcon && textFieldClasses.withIcon,
      )}
      {...props}
    >
      <div>
        <input
          placeholder={placeholder}
          {...inputProps}
          ref={ref}
          value={input.value}
          onChange={input.onChange}
          className={clsx(
            inputProps.className,
            textFieldClasses.input,
            error && textFieldClasses.error,
          )}
        />
        {withIcon && error ? (
          <span className={textFieldClasses.icon} onClick={onCancel}>
            <ErrorIcon color="primary" className={textFieldClasses.icon} />
          </span>
        ) : withIcon && !input.filled ? (
          <span className={textFieldClasses.icon}>
            <CheckIcon color="primary" />
          </span>
        ) : withIcon && input.filled ? (
          <span className={textFieldClasses.icon} onClick={onCancel}>
            <CloseIcon color="primary" />
          </span>
        ) : null}
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
