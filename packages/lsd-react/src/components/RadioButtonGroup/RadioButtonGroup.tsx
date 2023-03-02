import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { RadioButtonGroupContext } from './RadioButtonGroup.context'
import { radioButtonGroupClasses } from './RadioButtonGroup.classes'
import { Typography } from '../Typography'

export type ActiveRadioButtonType = string | number | readonly string[]

export type RadioButtonGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  activeRadioButton?: ActiveRadioButtonType | null
  size?: 'small' | 'medium' | 'large'
  label?: string
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> & {
  classes: typeof radioButtonGroupClasses
} = ({ size = 'large', label, activeRadioButton, children, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState(activeRadioButton)

  const setActiveRadioButton = (radioButton: ActiveRadioButtonType) => {
    setValue(radioButton)
  }

  useEffect(() => setValue(activeRadioButton), [activeRadioButton])

  return (
    <RadioButtonGroupContext.Provider
      value={{ activeRadioButton: value, setActiveRadioButton, size }}
    >
      <div
        ref={ref}
        {...props}
        className={clsx(props.className, radioButtonGroupClasses.root)}
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
