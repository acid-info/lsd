import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { Typography } from '../Typography'
import styles from './RadioButtonGroup.module.css'
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

function RadioButtonGroup({
  size = 'large',
  label,
  value,
  name,
  onChange,
  children,
  ...props
}: RadioButtonGroupProps) {
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
          styles['root-radiobuttongroup'],
        )}
      >
        <Typography
          component="span"
          variant={size === 'small' ? 'label2' : 'label1'}
          className={styles.label}
        >
          {label && label}
        </Typography>
        {children}
      </div>
    </RadioButtonGroupContext.Provider>
  )
}

export { RadioButtonGroup }
