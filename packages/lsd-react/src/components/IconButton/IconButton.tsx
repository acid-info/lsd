import clsx from 'clsx'
import React from 'react'
import { iconButtonClasses } from './IconButton.classes'

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'outlined' | 'filled'
  size?: 'small' | 'medium' | 'large'
}

export const IconButton: React.FC<IconButtonProps> & {
  classes: typeof iconButtonClasses
} = ({
  size = 'large',
  disabled,
  variant = 'outlined',
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
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
