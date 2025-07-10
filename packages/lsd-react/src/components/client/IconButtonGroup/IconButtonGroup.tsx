import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../../utils/useCommonProps'
import styles from './IconButtonGroup.module.css'
import { IconButtonGroupContext } from './IconButtonGroup.context'

export type IconButtonGroupProps = CommonProps &
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'outlined' | 'filled'
    size?: 'small' | 'medium' | 'large'
    disabled?: boolean
  }

function IconButtonGroup({
  size = 'large',
  disabled,
  variant = 'outlined',
  children,
  ...props
}: IconButtonGroupProps) {
  const commonProps = useCommonProps(props)

  return (
    <div
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        props.className,
        styles['root-iconButtonGroup'],
        styles[size],
        styles[variant],
        disabled && styles.disabled,
      )}
    >
      <IconButtonGroupContext.Provider
        value={{
          size,
          variant,
          disabled,
        }}
      >
        {children}
      </IconButtonGroupContext.Provider>
    </div>
  )
}

export { IconButtonGroup }
