import clsx from 'clsx'
import React from 'react'
import { CheckboxGroupContext } from './CheckboxGroup.context'
import { checkboxGroupClasses } from './CheckboxGroup.classes'
import { Typography } from '../Typography'

export type ActiveCheckboxType = string | number | readonly string[]

export type CheckboxGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: 'small' | 'medium' | 'large'
  label?: string
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> & {
  classes: typeof checkboxGroupClasses
} = ({ size = 'large', label, children, ...props }) => {
  return (
    <CheckboxGroupContext.Provider value={{ size }}>
      <div
        {...props}
        className={clsx(props.className, checkboxGroupClasses.root)}
      >
        <Typography
          component="span"
          variant={size === 'small' ? 'label2' : 'label1'}
          className={checkboxGroupClasses.label}
        >
          {label}
        </Typography>
        {children}
      </div>
    </CheckboxGroupContext.Provider>
  )
}

CheckboxGroup.classes = checkboxGroupClasses
