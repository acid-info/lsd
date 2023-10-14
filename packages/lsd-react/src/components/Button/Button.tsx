import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { buttonClasses } from './Button.classes'
import { useButtonGroupContext } from '../ButtonGroup/ButtonGroup.context'

export type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: 'large' | 'medium' | 'small'
    variant?: 'outlined' | 'filled'
    icon?: React.ReactNode
  }

export const Button: React.FC<ButtonProps> & {
  classes: typeof buttonClasses
} = ({
  size: sizeProp,
  variant: variantProp,
  disabled: disabledProp,
  icon,
  children,
  ...props
}) => {
  const context = useButtonGroupContext()
  const commonProps = useCommonProps(props)
  const contextCommonProps = useCommonProps(context || {})
  const commonPropsClassName =
    commonProps.className || contextCommonProps.className

  const size = sizeProp ?? context?.size ?? 'medium'
  const variant = variantProp ?? context?.variant ?? 'outlined'
  const disabled = disabledProp ?? context?.disabled ?? false

  return (
    <>
      <button
        {...omitCommonProps(props)}
        className={clsx(
          commonPropsClassName,
          props.className,
          buttonClasses.root,
          buttonClasses[size],
          buttonClasses[variant],
          disabled && buttonClasses.disabled,
          icon && buttonClasses.withIcon,
        )}
      >
        <span className={buttonClasses.text}>{children}</span>
        {icon && <span className={buttonClasses.icon}>{icon}</span>}
      </button>
    </>
  )
}

Button.classes = buttonClasses
