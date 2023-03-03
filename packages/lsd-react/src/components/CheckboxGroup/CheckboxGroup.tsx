import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { CheckboxGroupContext } from './CheckboxGroup.context'
import { checkboxGroupClasses } from './CheckboxGroup.classes'
import { Typography } from '../Typography'

export type ActiveCheckboxType = string | number | readonly string[]

export type CheckboxGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  activeCheckbox?: ActiveCheckboxType | null
  size?: 'small' | 'medium' | 'large'
  label?: string
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> & {
  classes: typeof checkboxGroupClasses
} = ({ size = 'large', label, activeCheckbox, children, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState(activeCheckbox)

  const setActiveCheckbox = (radioButton: ActiveCheckboxType) => {
    setValue(radioButton)
  }

  useEffect(() => setValue(activeCheckbox), [activeCheckbox])

  return (
    <CheckboxGroupContext.Provider
      value={{ activeCheckbox: value, setActiveCheckbox, size }}
    >
      <div
        ref={ref}
        {...props}
        className={clsx(props.className, checkboxGroupClasses.root)}
      >
        <Typography
          component="span"
          variant={size === 'small' ? 'label2' : 'label1'}
          className={checkboxGroupClasses.label}
        >
          {label && label}
        </Typography>
        {children}
      </div>
    </CheckboxGroupContext.Provider>
  )
}

CheckboxGroup.classes = checkboxGroupClasses
