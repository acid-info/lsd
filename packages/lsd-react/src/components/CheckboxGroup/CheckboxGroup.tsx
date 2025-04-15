import clsx from 'clsx'
import React from 'react'
import { CheckboxGroupContext } from './CheckboxGroup.context'
import { checkboxGroupClasses } from './CheckboxGroup.classes'
import { Typography } from '../Typography'
import {
  CommonProps,
  omitCommonProps,
  pickCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'

export type ActiveCheckboxType = string | number | readonly string[]

export type CheckboxGroupProps = CommonProps &
  React.HTMLAttributes<HTMLDivElement> & {
    size?: 'small' | 'medium' | 'large'
    label?: string
  }

const classes = checkboxGroupClasses

function CheckboxGroup({
  size = 'large',
  label,
  children,
  ...props
}: CheckboxGroupProps) {
  const commonProps = useCommonProps(props)

  return (
    <CheckboxGroupContext.Provider value={{ size }}>
      <div
        {...omitCommonProps(props)}
        className={clsx(
          commonProps.className,
          props.className,
          checkboxGroupClasses.root,
        )}
      >
        <Typography
          component="span"
          variant={size === 'small' ? 'label2' : 'label1'}
          className={checkboxGroupClasses.label}
          {...pickCommonProps(props)}
        >
          {label}
        </Typography>
        {children}
      </div>
    </CheckboxGroupContext.Provider>
  )
}

CheckboxGroup.classes = classes

export { CheckboxGroup }
