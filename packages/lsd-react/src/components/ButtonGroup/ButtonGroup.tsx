import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { ButtonGroupContext } from './ButtonGroup.context'
import styles from './ButtonGroup.module.css'

export type ButtonGroupProps = CommonProps &
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'outlined' | 'filled'
    size?: 'large' | 'medium' | 'small'
    disabled?: boolean
  }

function ButtonGroup({
  size = 'large',
  disabled,
  variant = 'outlined',
  children,
  ...props
}: ButtonGroupProps) {
  const commonProps = useCommonProps(props)

  return (
    <div
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        props.className,
        styles.buttonGroup,
        styles[size],
        styles[variant],
        disabled && styles.disabled,
      )}
    >
      <ButtonGroupContext.Provider
        value={{
          size,
          variant,
          disabled,
          styles: styles.button,
        }}
      >
        {children}
      </ButtonGroupContext.Provider>
    </div>
  )
}

export { ButtonGroup }
