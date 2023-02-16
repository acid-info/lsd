import clsx from 'clsx'
import React from 'react'
import { tagClasses } from './Tag.classes'

export type TagProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'outlined' | 'filled'
  label: string
  icon?: React.ReactNode
  iconDirection?: 'left' | 'right' | 'none'
  disabled?: boolean
}

export const Tag: React.FC<TagProps> & {
  classes: typeof tagClasses
} = ({
  label,
  variant = 'outlined',
  disabled = 'false',
  icon,
  iconDirection,
  children,
  ...props
}) => {
  const renderItems = () => {
    switch (iconDirection) {
      case 'left':
        return (
          <>
            {icon}
            {label}
          </>
        )
      case 'right':
        return (
          <>
            {label}
            {icon}
          </>
        )
      default:
        return <>{label}</>
    }
  }

  return (
    <div
      {...props}
      aria-label={label}
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
