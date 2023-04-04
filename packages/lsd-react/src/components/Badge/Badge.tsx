import clsx from 'clsx'
import React from 'react'
import { Typography } from '../Typography'
import { badgeClasses } from './Badge.classes'

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'outlined' | 'filled'
  label: string
  icon?: React.ReactNode
  iconDirection?: 'left' | 'right'
  size?: 'large' | 'small'
  disabled?: boolean
}

export const Badge: React.FC<BadgeProps> & {
  classes: typeof badgeClasses
} = ({
  label,
  variant = 'outlined',
  disabled = 'false',
  size = 'large',
  icon,
  iconDirection = 'left',
  children,
  ...props
}) => {
  const renderItems = () => (
    <>
      {iconDirection === 'left' && icon}
      <Typography
        variant={size === 'small' ? 'label2' : 'label1'}
        className={badgeClasses[variant]}
      >
        {label}
      </Typography>
      {iconDirection === 'right' && icon}
    </>
  )

  return (
    <div
      aria-label={label}
      {...props}
      className={clsx(
        props.className,
        badgeClasses.root,
        badgeClasses[variant],
        disabled && badgeClasses.disabled,
        badgeClasses[size],
      )}
    >
      {renderItems()}
    </div>
  )
}

Badge.classes = badgeClasses
