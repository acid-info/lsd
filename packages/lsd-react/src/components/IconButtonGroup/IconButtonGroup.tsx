import clsx from 'clsx'
import React from 'react'
import { iconButtonGroupClasses } from './IconButtonGroup.classes'
import { IconButtonGroupContext } from './IconButtonGroup.context'

export type IconButtonGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'outlined' | 'filled'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

export const IconButtonGroup: React.FC<IconButtonGroupProps> & {
  classes: typeof iconButtonGroupClasses
} = ({
  size = 'large',
  disabled,
  variant = 'outlined',
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={clsx(
        props.className,
        iconButtonGroupClasses.root,
        iconButtonGroupClasses[size],
        iconButtonGroupClasses[variant],
        disabled && iconButtonGroupClasses.disabled,
      )}
    >
      <IconButtonGroupContext.Provider
        value={{
          size,
          variant,
          disabled,
        }}
      >
        {children}
      </IconButtonGroupContext.Provider>
    </div>
  )
}

IconButtonGroup.classes = iconButtonGroupClasses
