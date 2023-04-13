import clsx from 'clsx'
import React from 'react'
import { CommonProps, useCommonProps } from '../../utils/useCommonProps'
import { useIconButtonGroupContext } from '../IconButtonGroup/IconButtonGroup.context'
import { iconButtonClasses } from './IconButton.classes'

export type IconButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'outlined' | 'filled'
    size?: 'small' | 'medium' | 'large'
  }

export const IconButton: React.FC<IconButtonProps> & {
  classes: typeof iconButtonClasses
} = ({
  size: sizeProp,
  disabled: disabledProp,
  variant: variantProp,
  children,
  ...props
}) => {
  const commonProps = useCommonProps(props)
  const context = useIconButtonGroupContext()

  const size = sizeProp ?? context?.size ?? 'large'
  const variant = variantProp ?? context?.variant ?? 'outlined'
  const disabled = disabledProp ?? context?.disabled ?? false

  return (
    <button
      {...props}
      className={clsx(
        commonProps.className,
        props.className,
        iconButtonClasses.root,
        iconButtonClasses[size],
        iconButtonClasses[variant],
        disabled && iconButtonClasses.disabled,
      )}
    >
      {children}
    </button>
  )
}

IconButton.classes = iconButtonClasses
