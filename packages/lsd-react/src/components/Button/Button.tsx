import clsx from 'clsx'
import React from 'react'
import { CommonProps, useCommonProps } from '../../utils/useCommonProps'
import { buttonClasses } from './Button.classes'

export type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: 'large' | 'medium' | 'small'
    icon?: React.ReactNode
  }

export const Button: React.FC<ButtonProps> & {
  classes: typeof buttonClasses
} = ({ size = 'medium', icon, children, ...props }) => {
  const commonProps = useCommonProps(props)

  return (
    <>
      <button
        {...props}
        className={clsx(
          commonProps.className,
          props.className,
          buttonClasses.root,
          buttonClasses[size],
          props.disabled && buttonClasses.disabled,
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
