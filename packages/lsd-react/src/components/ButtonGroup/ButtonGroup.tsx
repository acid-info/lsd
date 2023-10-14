import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { buttonGroupClasses } from './ButtonGroup.classes'
import { ButtonGroupContext } from './ButtonGroup.context'

export type ButtonGroupProps = CommonProps &
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'outlined' | 'filled'
    size?: 'large' | 'medium' | 'small'
    disabled?: boolean
  }

export const ButtonGroup: React.FC<ButtonGroupProps> & {
  classes: typeof buttonGroupClasses
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
        buttonGroupClasses.root,
        buttonGroupClasses[size],
        buttonGroupClasses[variant],
        disabled && buttonGroupClasses.disabled,
      )}
    >
      <ButtonGroupContext.Provider
        value={{
          size,
          variant,
          disabled,
        }}
      >
        {children}
      </ButtonGroupContext.Provider>
    </div>
  )
}

ButtonGroup.classes = buttonGroupClasses
