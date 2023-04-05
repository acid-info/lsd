import clsx from 'clsx'
import React from 'react'
import { Typography } from '../Typography'
import { tagClasses } from './Tag.classes'

export type TagProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'outlined' | 'filled'
  icon?: React.ReactNode
  iconDirection?: 'left' | 'right'
  disabled?: boolean
  size?: 'large' | 'small'
}

export const Tag: React.FC<TagProps> & {
  classes: typeof tagClasses
} = ({
  variant = 'outlined',
  disabled = 'false',
  icon,
  iconDirection = 'left',
  children,
  size = 'large',
  ...props
}) => {
  return (
    <div
      aria-label={children as string}
      {...props}
      className={clsx(
        props.className,
        tagClasses.root,
        tagClasses[variant],
        disabled && tagClasses.disabled,
        tagClasses[size],
      )}
    >
      {iconDirection === 'left' && icon}
      <Typography
        variant={size === 'small' ? 'label2' : 'label1'}
        className={tagClasses.label}
        component="span"
      >
        {children}
      </Typography>
      {iconDirection === 'right' && icon}
    </div>
  )
}

Tag.classes = tagClasses
