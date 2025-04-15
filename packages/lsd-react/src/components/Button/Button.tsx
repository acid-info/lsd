import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { useButtonGroupContext } from '../ButtonGroup/ButtonGroup.context'
import { Typography } from '../Typography'
import { buttonClasses } from './Button.classes'

export type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: 'large' | 'medium' | 'small'
    variant?: 'outlined' | 'filled'
    icon?: React.ReactNode
  }

const classes = buttonClasses

function Button({
  size: sizeProp,
  variant: variantProp,
  disabled: disabledProp,
  icon,
  children,
  ...props
}: ButtonProps) {
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
          Boolean(disabled) && buttonClasses.disabled,
          Boolean(icon) && buttonClasses.withIcon,
        )}
        disabled={disabled}
      >
        <Typography
          component="span"
          className={buttonClasses.text}
          variant={size === 'small' ? 'label2' : 'label1'}
        >
          {children}
        </Typography>
        {icon && <span className={buttonClasses.icon}>{icon}</span>}
      </button>
    </>
  )
}

Button.classes = classes

export { Button }
