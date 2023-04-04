import clsx from 'clsx'
import React from 'react'
import { Typography } from '../Typography'
import { tagClasses } from './Tag.classes'

export type TagProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'outlined' | 'filled'
  label: string
  icon?: React.ReactNode
  iconDirection?: 'left' | 'right'
  disabled?: boolean
  size?: 'large' | 'small'
}

export const Tag: React.FC<TagProps> & {
  classes: typeof tagClasses
} = ({
  label,
  variant = 'outlined',
  disabled = 'false',
  icon,
  iconDirection = 'left',
  children,
  size = 'large',
  ...props
}) => {
  const renderItems = () => (
    <>
      {iconDirection === 'left' && icon}
      <Typography
        variant={size === 'small' ? 'label2' : 'label1'}
        className={tagClasses[variant]}
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
        tagClasses.root,
        tagClasses[variant],
        disabled && tagClasses.disabled,
        tagClasses[size],
      )}
    >
      {renderItems()}
    </div>
  )
}

Tag.classes = tagClasses
