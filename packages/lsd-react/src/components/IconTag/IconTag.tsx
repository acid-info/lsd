import clsx from 'clsx'
import React from 'react'
import { iconTagClasses } from './IconTag.classes'

export type IconTagProps = React.HTMLAttributes<HTMLDivElement> & {
  label?: string
  variant?: 'outlined' | 'filled'
}

export const IconTag: React.FC<IconTagProps> & {
  classes: typeof iconTagClasses
} = ({ label, variant = 'outlined', children, ...props }) => {
  return (
    <div
      {...props}
      aria-label={label}
      className={clsx(
        props.className,
        iconTagClasses.root,
        iconTagClasses[variant],
      )}
    >
      {children}
    </div>
  )
}

IconTag.classes = iconTagClasses
