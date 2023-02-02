import clsx from 'clsx'
import React from 'react'
import { buttonClasses } from './Button.classes'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'large' | 'medium' | 'small'
}

export const Button: React.FC<ButtonProps> & {
  classes: typeof buttonClasses
} = ({ size = 'medium', children, ...props }) => {
  return (
    <>
      <button
        {...props}
        className={clsx(
          props.className,
          buttonClasses.root,
          buttonClasses[size],
          props.disabled && buttonClasses.disabled,
        )}
      >
        <span className={buttonClasses.text}>{children}</span>
      </button>
    </>
  )
}

Button.classes = buttonClasses
