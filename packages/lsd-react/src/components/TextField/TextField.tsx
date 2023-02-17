import clsx from 'clsx'
import React, { useState } from 'react'
import { CheckIcon, CloseIcon, ErrorIcon } from '../Icons'
import { Typography } from '../Typography'
import { textFieldClasses } from './TextField.classes'

export type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  size?: 'large' | 'medium'
  withIcon?: boolean
  error?: boolean
  supportingText?: string
}

export const TextField: React.FC<TextFieldProps> & {
  classes: typeof textFieldClasses
} = ({
  size = 'large',
  withIcon = 'false',
  supportingText = 'Supporting text',
  error = false,
  children,
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string>('')

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setInputValue(newValue)
  }

  const onCancel = () => {
    setInputValue('')
  }

  return (
    <>
      <div
        className={clsx(
          props.className,
          textFieldClasses.root,
          textFieldClasses[size],
          props.disabled && textFieldClasses.disabled,
          withIcon && textFieldClasses.withIcon,
        )}
      >
        <input
          onChange={onChange}
          className={clsx(
            textFieldClasses.input,
            error && textFieldClasses.error,
          )}
          value={inputValue}
          {...props}
        />
        {withIcon && error ? (
          <span className={textFieldClasses.filled} onClick={onCancel}>
            <ErrorIcon color="primary" className={textFieldClasses.filled} />
          </span>
        ) : withIcon && !inputValue.length ? (
          <span className={textFieldClasses.filled}>
            <CheckIcon color="primary" />
          </span>
        ) : withIcon && inputValue.length ? (
          <span className={textFieldClasses.filled} onClick={onCancel}>
            <CloseIcon color="primary" />
          </span>
        ) : null}
      </div>
      {supportingText && (
        <Typography
          variant={size === 'large' ? 'label1' : 'label2'}
          component="p"
          className={clsx(
            textFieldClasses.supportingText,
            size && size === 'large'
              ? textFieldClasses.supportingTextLarge
              : textFieldClasses.supportingTextMedium,
          )}
        >
          {supportingText}
        </Typography>
      )}
    </>
  )
}

TextField.classes = textFieldClasses
