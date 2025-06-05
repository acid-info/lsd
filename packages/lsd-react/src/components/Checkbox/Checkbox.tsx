import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { useInput } from '../../utils/useInput'
import { useCheckboxGroupContext } from '../CheckboxGroup/CheckboxGroup.context'
import { CheckboxIcon, CheckboxOutlineBlankIcon } from '../Icons'
import { IndeterminateCheckboxFilledIcon } from '../Icons/IndeterminateCheckboxFilledIcon'
import { Typography } from '../Typography'
import styles from './Checkbox.module.css'

export type CheckboxProps = CommonProps &
  Omit<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    'onChange' | 'value' | 'color'
  > &
  Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    'name' | 'onChange' | 'checked' | 'defaultChecked'
  > & {
    disabled?: boolean
    indeterminate?: boolean
    size?: 'small' | 'medium' | 'large'
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  }

function Checkbox({
  name,
  size: _size = 'large',
  onChange,
  checked,
  defaultChecked,
  disabled = false,
  indeterminate = false,
  inputProps = {},
  children,
  ...props
}: CheckboxProps) {
  const commonProps = useCommonProps(props)
  const ref = useRef<HTMLInputElement>(null)
  const [focused, setFocused] = useState(false)
  const input = useInput({
    value: checked,
    defaultValue: defaultChecked ?? false,
    onChange,
    ref: ref as React.RefObject<HTMLInputElement>,
  })

  const checkboxGroup = useCheckboxGroupContext()
  const size = checkboxGroup?.size ?? _size

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
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        props.className,
        styles['root-checkbox'],
        styles[size],
        focused && styles.focused,
        disabled && styles.disabled,
        indeterminate && styles.indeterminate,
      )}
    >
      <input
        ref={ref}
        name={name}
        type="checkbox"
        disabled={disabled}
        checked={input.value}
        onChange={input.onChange}
        defaultChecked={defaultChecked}
        className={clsx(inputProps.className, styles.input)}
        {...inputProps}
      />
      {indeterminate ? (
        <IndeterminateCheckboxFilledIcon color="primary" focusable={false} />
      ) : input.value ? (
        <CheckboxIcon color="primary" focusable={false} />
      ) : (
        <CheckboxOutlineBlankIcon color="primary" focusable={false} />
      )}
      <span className={styles.label}>{children}</span>
    </Typography>
  )
}

export { Checkbox }
