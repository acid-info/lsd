import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../../utils/useCommonProps'
import { Typography } from '../Typography'
import styles from './Tag.module.css'

export type TagProps = CommonProps &
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'outlined' | 'filled'
    icon?: React.ReactNode
    iconDirection?: 'left' | 'right'
    disabled?: boolean
    size?: 'large' | 'small'
  }

function Tag({
  variant = 'outlined',
  disabled,
  icon,
  iconDirection = 'left',
  children,
  size = 'large',
  ...props
}: TagProps) {
  const commonProps = useCommonProps(props)

  return (
    <div
      aria-label={children as string}
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        props.className,
        styles['root-tag'],
        styles[variant],
        disabled && styles.disabled,
        styles[size],
      )}
    >
      {iconDirection === 'left' && icon}
      <Typography
        variant={size === 'small' ? 'label2' : 'label1'}
        className={styles.label}
        component="span"
      >
        {children}
      </Typography>
      {iconDirection === 'right' && icon}
    </div>
  )
}

export { Tag }
