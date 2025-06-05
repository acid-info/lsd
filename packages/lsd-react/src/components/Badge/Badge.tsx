import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { Typography } from '../Typography'
import styles from './Badge.module.css'

export type BadgeProps = CommonProps &
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'outlined' | 'filled'
    icon?: React.ReactNode
    iconDirection?: 'left' | 'right'
    size?: 'large' | 'small'
    disabled?: boolean
  }

function Badge({
  variant = 'outlined',
  disabled,
  size = 'large',
  icon,
  iconDirection = 'left',
  children,
  ...props
}: BadgeProps) {
  const commonProps = useCommonProps(props)

  return (
    <div
      aria-label={children as string}
      {...omitCommonProps(props)}
      className={clsx(
        props.className,
        commonProps.className,
        styles['root-badge'],
        styles[variant],
        disabled && styles.disabled,
        styles[size],
      )}
    >
      {iconDirection === 'left' && icon}
      <Typography
        component="span"
        variant={size === 'small' ? 'label2' : 'label1'}
        className={styles.label}
      >
        {children}
      </Typography>
      {iconDirection === 'right' && icon}
    </div>
  )
}

export { Badge }
