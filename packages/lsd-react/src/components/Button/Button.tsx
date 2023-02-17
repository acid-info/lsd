import clsx from 'clsx'
import React from 'react'
import { PickIcon } from '../Icons'
import { buttonClasses } from './Button.classes'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'large' | 'medium' | 'small'
  withIcon?: boolean
}

export const Button: React.FC<ButtonProps> & {
  classes: typeof buttonClasses
} = ({ size = 'medium', withIcon = 'false', children, ...props }) => {
  return (
    <>
      <button
        {...props}
        className={clsx(
          props.className,
          buttonClasses.root,
          buttonClasses[size],
          props.disabled && buttonClasses.disabled,
          withIcon && buttonClasses.withIcon,
        )}
      >
        <span className={buttonClasses.text}>{children}</span>
        {withIcon && (
          <span className={buttonClasses.icon}>
            {<PickIcon color="primary" />}
          </span>
        )}
      </button>
    </>
  )
}

Button.classes = buttonClasses
