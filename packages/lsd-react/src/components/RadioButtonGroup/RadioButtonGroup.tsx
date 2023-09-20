import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { Typography } from '../Typography'
import { radioButtonGroupClasses } from './RadioButtonGroup.classes'
import { RadioButtonGroupContext } from './RadioButtonGroup.context'

export type ActiveRadioButtonType = string | readonly string[]

export type RadioButtonGroupProps = CommonProps &
  React.HTMLAttributes<HTMLDivElement> & {
    value: ActiveRadioButtonType | null
    name?: string | null
    onChange?: (value: ActiveRadioButtonType) => void
    size?: 'small' | 'medium' | 'large'
    label?: string
  }

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> & {
  classes: typeof radioButtonGroupClasses
} = ({ size = 'large', label, value, name, onChange, children, ...props }) => {
  const commonProps = useCommonProps(props)
  const ref = useRef<HTMLDivElement>(null)
  const [activeValue, setActiveValue] = useState(value)

  const setActiveRadioButton = (value: ActiveRadioButtonType) => {
    if (onChange) onChange(value)
    else setActiveValue(value)
  }

  useEffect(() => setActiveValue(value), [value])

  return (
    <RadioButtonGroupContext.Provider
      value={{ value: activeValue, setActiveRadioButton, name, size }}
    >
      <div
        ref={ref}
        {...omitCommonProps(props)}
        className={clsx(
          commonProps.className,
          props.className,
          radioButtonGroupClasses.root,
        )}
      >
        <Typography
          component="span"
          variant={size === 'small' ? 'label2' : 'label1'}
          className={radioButtonGroupClasses.label}
        >
          {label && label}
        </Typography>
        {children}
      </div>
    </RadioButtonGroupContext.Provider>
  )
}

RadioButtonGroup.classes = radioButtonGroupClasses
