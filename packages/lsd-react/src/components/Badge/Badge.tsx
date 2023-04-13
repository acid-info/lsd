import clsx from 'clsx'
import React from 'react'
import { CommonProps, useCommonProps } from '../../utils/useCommonProps'
import { Typography } from '../Typography'
import { badgeClasses } from './Badge.classes'

export type BadgeProps = CommonProps &
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'outlined' | 'filled'
    icon?: React.ReactNode
    iconDirection?: 'left' | 'right'
    size?: 'large' | 'small'
    disabled?: boolean
  }

export const Badge: React.FC<BadgeProps> & {
  classes: typeof badgeClasses
} = ({
  variant = 'outlined',
  disabled = 'false',
  size = 'large',
  icon,
  iconDirection = 'left',
  children,
  ...props
}) => {
  const commonProps = useCommonProps(props)

  return (
    <div
      aria-label={children as string}
      {...props}
      className={clsx(
        props.className,
        commonProps.className,
        badgeClasses.root,
        badgeClasses[variant],
        disabled && badgeClasses.disabled,
        badgeClasses[size],
      )}
    >
      {iconDirection === 'left' && icon}
      <Typography
        component="span"
        variant={size === 'small' ? 'label2' : 'label1'}
        className={badgeClasses.label}
      >
        {children}
      </Typography>
      {iconDirection === 'right' && icon}
    </div>
  )
}

Badge.classes = badgeClasses
