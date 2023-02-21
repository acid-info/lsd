import clsx from 'clsx'
import React, { useRef, useState } from 'react'
import { CheckIcon, CloseIcon, ErrorIcon } from '../Icons'
import { Typography } from '../Typography'
import { textFieldClasses } from './TextField.classes'

export type TextFieldProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onChange' | 'value'
> & {
  size?: 'large' | 'medium'
  withIcon?: boolean
  error?: boolean
  disabled?: boolean
  supportingText?: string
  value?: string
  onChange?: (value: any) => void
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
  onChange,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [inputValue, setInputValue] = useState<string>('')

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    if (onChange) onChange(newValue)
    setInputValue(newValue)
  }

  const onCancel = () => {
    setInputValue('')
    if (typeof onChange !== 'undefined') onChange('')
  }

  return (
    <div
      ref={ref}
      className={clsx(
        props.className,
        textFieldClasses.root,
        textFieldClasses[size],
        props.disabled && textFieldClasses.disabled,
        withIcon && textFieldClasses.withIcon,
      )}
    >
      <div>
        <input
          onChange={handleChange}
          className={clsx(
            textFieldClasses.input,
            error && textFieldClasses.error,
          )}
          value={inputValue}
          {...props}
        />
        {withIcon && error ? (
          <span className={textFieldClasses.icon} onClick={onCancel}>
            <ErrorIcon color="primary" className={textFieldClasses.icon} />
          </span>
        ) : withIcon && !inputValue.length ? (
          <span className={textFieldClasses.icon}>
            <CheckIcon color="primary" />
          </span>
        ) : withIcon && inputValue.length ? (
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
