import clsx from 'clsx'
import React from 'react'
import { buttonClasses } from './Button.classes'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'large' | 'medium' | 'small'
  icon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> & {
  classes: typeof buttonClasses
} = ({ size = 'medium', icon, children, ...props }) => {
  return (
    <>
      <button
        {...props}
        className={clsx(
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
