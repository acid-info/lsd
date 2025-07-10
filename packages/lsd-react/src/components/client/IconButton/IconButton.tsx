import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../../utils/useCommonProps'
import { useIconButtonGroupContext } from '../IconButtonGroup/IconButtonGroup.context'
import styles from '../IconButtonGroup/IconButtonGroup.module.css'

export type IconButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'outlined' | 'filled'
    size?: 'small' | 'medium' | 'large'
  }

function IconButton({
  size: sizeProp,
  disabled: disabledProp,
  variant: variantProp,
  children,
  ...props
}: IconButtonProps) {
  const commonProps = useCommonProps(props)
  const context = useIconButtonGroupContext()

  const size = sizeProp ?? context?.size ?? 'large'
  const variant = variantProp ?? context?.variant ?? 'outlined'
  const disabled = disabledProp ?? context?.disabled ?? false

  return (
    <button
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        props.className,
        styles.iconButton,
        styles[size],
        styles[variant],
        disabled && styles.disabled,
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export { IconButton }
