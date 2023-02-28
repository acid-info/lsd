import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { useInput } from '../../utils/useInput'
import { CheckboxFilledIcon, CheckboxIcon } from '../Icons'
import { CheckboxIndeterminateIcon } from '../Icons/CheckboxIndeterminate'
import { Typography } from '../Typography'
import { checkboxClasses } from './Checkbox.classes'

export type CheckboxProps = Omit<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  'onChange' | 'value' | 'color'
> &
  Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'checked' | 'defaultChecked'
  > & {
    disabled?: boolean
    indeterminate?: boolean
    size?: 'small' | 'medium' | 'large'
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  }

export const Checkbox: React.FC<CheckboxProps> & {
  classes: typeof checkboxClasses
} = ({
  size = 'large',
  onChange,
  checked,
  defaultChecked,
  disabled = false,
  indeterminate = false,
  inputProps = {},
  children,
  ...props
}) => {
  const ref = useRef<HTMLInputElement>(null)
  const [focused, setFocused] = useState(false)
  const input = useInput({
    value: checked,
    defaultValue: defaultChecked ?? false,
    onChange,
    ref,
  })

  useEffect(() => {
    if (!ref.current) return

    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)

    ref.current.addEventListener('focus', onFocus)
    ref.current.addEventListener('blur', onBlur)

    return () => {
      ref.current?.removeEventListener('focus', onFocus)
      ref.current?.removeEventListener('blur', onBlur)
    }
  }, [ref.current])

  return (
    <Typography
      color="primary"
      variant={size === 'large' ? 'label1' : 'label2'}
      component="label"
      aria-disabled={disabled ? 'true' : 'false'}
      {...props}
      className={clsx(
        props.className,
        checkboxClasses.root,
        checkboxClasses[size],
        focused && checkboxClasses.focused,
        disabled && checkboxClasses.disabled,
        indeterminate && checkboxClasses.indeterminate,
      )}
    >
      <input
        ref={ref}
        type="checkbox"
        disabled={disabled}
        checked={input.value}
        onChange={input.onChange}
        defaultChecked={defaultChecked}
        className={clsx(inputProps.className, checkboxClasses.input)}
        {...inputProps}
      />
      {indeterminate ? (
        <CheckboxIndeterminateIcon color="primary" focusable={false} />
      ) : input.value ? (
        <CheckboxFilledIcon color="primary" focusable={false} />
      ) : (
        <CheckboxIcon color="primary" focusable={false} />
      )}
      <span className={checkboxClasses.label}>{children}</span>
    </Typography>
  )
}

Checkbox.classes = checkboxClasses
