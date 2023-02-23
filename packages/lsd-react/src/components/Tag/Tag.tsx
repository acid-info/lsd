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
  ...props
}) => {
  const renderItems = () => (
    <>
      {iconDirection === 'left' && icon}
      <Typography className={tagClasses[variant]}>{label}</Typography>
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
      )}
    >
      {renderItems()}
    </div>
  )
}

Tag.classes = tagClasses
