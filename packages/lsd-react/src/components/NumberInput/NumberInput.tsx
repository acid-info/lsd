import clsx from 'clsx'
import React, { useRef } from 'react'
import { useInput } from '../../utils/useInput'
import { AddIcon, ErrorIcon, RemoveIcon } from '../Icons'
import { Typography } from '../Typography'
import { numberInputClasses } from './NumberInput.classes'
import { IconButton } from '../IconButton'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'

export type NumberInputProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'value'> &
  Pick<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    label?: React.ReactNode
    size?: 'large' | 'medium' | 'small'
    error?: boolean
    errorIcon?: boolean
    disabled?: boolean
    supportingText?: string
    value?: string
    defaultValue?: string
    placeholder?: string
    icon?: React.ReactNode
    min?: number
    max?: number
    step?: number
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  }

export const NumberInput: React.FC<NumberInputProps> & {
  classes: typeof numberInputClasses
} = ({
  label,
  size = 'large',
  error = false,
  errorIcon = false,
  supportingText,
  value,
  placeholder,
  defaultValue,
  disabled,
  onChange,
  icon,
  inputProps = {},
  id = 'number-input',
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  step = 1,
  ...props
}) => {
  const ref = useRef<HTMLInputElement>(null)
  const commonProps = useCommonProps(props)
  const input = useInput({ defaultValue, value, onChange, ref })

  const handleIncrement = () => {
    if (disabled) return
    const newValue = Math.min(max, Number(input.value || '0') + step)
    input.setValue(newValue.toString())
  }

  const handleDecrement = () => {
    if (disabled) return
    const newValue = Math.max(min, Number(input.value || '0') - step)
    input.setValue(newValue.toString())
  }

  return (
    <div
      aria-disabled={disabled ? 'true' : 'false'}
      {...omitCommonProps(props)}
      className={clsx(
        props.className,
        commonProps.className,
        numberInputClasses.root,
        numberInputClasses[size],
        disabled && numberInputClasses.disabled,
        error && numberInputClasses.error,
      )}
    >
      {label && (
        <Typography
          htmlFor={id}
          className={numberInputClasses.label}
          variant="label2"
          component="label"
        >
          {label}
        </Typography>
      )}

      <div className={numberInputClasses.mainContainer}>
        <IconButton
          onClick={handleDecrement}
          className={numberInputClasses.plusMinusIcons}
        >
          <RemoveIcon color="primary" />
        </IconButton>

        <div className={numberInputClasses.inputContainer}>
          <input
            id={id}
            type="number"
            placeholder={placeholder}
            ref={ref}
            className={clsx(inputProps.className, numberInputClasses.input)}
            value={input.value || ''}
            onChange={input.onChange}
            min={min}
            max={max}
            step={step}
            disabled={disabled}
            {...inputProps}
          />
          {error && !!errorIcon && (
            <span className={numberInputClasses.errorIcon}>
              <ErrorIcon color="primary" />
            </span>
          )}
        </div>

        <IconButton
          onClick={handleIncrement}
          className={numberInputClasses.plusMinusIcons}
        >
          <AddIcon color="primary" />
        </IconButton>
      </div>
      {supportingText && (
        <div className={clsx(numberInputClasses.supportingText)}>
          <Typography variant={'label2'} component="p">
            {supportingText}
          </Typography>
        </div>
      )}
    </div>
  )
}

NumberInput.classes = numberInputClasses
