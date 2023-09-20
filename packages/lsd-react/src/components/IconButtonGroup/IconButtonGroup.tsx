import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { iconButtonGroupClasses } from './IconButtonGroup.classes'
import { IconButtonGroupContext } from './IconButtonGroup.context'

export type IconButtonGroupProps = CommonProps &
  React.HTMLAttributes<HTMLDivElement> & {
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
  const commonProps = useCommonProps(props)

  return (
    <div
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
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
