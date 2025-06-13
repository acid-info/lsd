import clsx from 'clsx'
import React from 'react'
import { CheckboxGroupContext } from './CheckboxGroup.context'
import { Typography } from '../Typography'
import {
  CommonProps,
  omitCommonProps,
  pickCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import styles from './CheckboxGroup.module.css'

export type ActiveCheckboxType = string | number | readonly string[]

export type CheckboxGroupProps = CommonProps &
  React.HTMLAttributes<HTMLDivElement> & {
    size?: 'small' | 'medium' | 'large'
    label?: string
  }

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
          styles['root-checkboxGroup'],
        )}
      >
        <Typography
          component="span"
          variant={size === 'small' ? 'label2' : 'label1'}
          className={styles.label}
          {...pickCommonProps(props)}
        >
          {label}
        </Typography>
        {children}
      </div>
    </CheckboxGroupContext.Provider>
  )
}

export { CheckboxGroup }
