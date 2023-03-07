import clsx from 'clsx'
import React, { useRef } from 'react'
import { useInput } from '../../utils/useInput'
import { RadioButtonFilledIcon, RadioButtonIcon } from '../Icons'
import { useRadioButtonGroupContext } from '../RadioButtonGroup/RadioButtonGroup.context'
import { Typography } from '../Typography'
import { radioButtonClasses } from './RadioButton.classes'

export type RadioButtonProps = Omit<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  'onChange' | 'value' | 'color'
> &
  Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'checked' | 'defaultChecked'
  > & {
    disabled?: boolean
    size?: 'small' | 'medium' | 'large'
    name?: string
    value: string
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  }

export const RadioButton: React.FC<RadioButtonProps> & {
  classes: typeof radioButtonClasses
} = ({
  size: _size = 'large',
  onChange,
  checked: _checked,
  defaultChecked,
  disabled = false,
  value,
  inputProps = {},
  children,
  ...props
}) => {
  const ref = useRef<HTMLInputElement>(null)

  const radioButtonGroup = useRadioButtonGroupContext()
  const size = radioButtonGroup?.size ?? _size
  const name = radioButtonGroup?.name ?? ''
  const selected = radioButtonGroup
    ? radioButtonGroup.value === value
    : _checked

  const input = useInput({
    value: selected,
    defaultValue: defaultChecked ?? false,
    onChange,
    ref,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    radioButtonGroup
      ? radioButtonGroup.setActiveRadioButton(event.target.value)
      : input.onChange(event)
  }

  return (
    <Typography
      color="primary"
      variant={size === 'large' ? 'label1' : 'label2'}
      component="label"
      aria-disabled={disabled ? 'true' : 'false'}
      {...props}
      className={clsx(
        props.className,
        radioButtonClasses.root,
        radioButtonClasses[size],
        disabled && radioButtonClasses.disabled,
      )}
    >
      <input
        ref={ref}
        name={name}
        value={value}
        type="radio"
        checked={input.value}
        onChange={handleChange}
        defaultChecked={defaultChecked}
        className={clsx(inputProps.className, radioButtonClasses.input)}
        {...inputProps}
      />
      {input.value ? (
        <RadioButtonFilledIcon color="primary" focusable={false} />
      ) : (
        <RadioButtonIcon color="primary" focusable={false} />
      )}
      <span className={radioButtonClasses.label}>{children}</span>
    </Typography>
  )
}

RadioButton.classes = radioButtonClasses
