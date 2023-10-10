import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { buttonGroupClasses } from './ButtonGroup.classes'
import { Button } from '../Button/Button'

export type ButtonGroupProps = CommonProps &
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'outlined' | 'filled'
    size?: 'large' | 'medium' | 'small'
    disabled?: boolean
  }

export const ButtonGroup: React.FC<ButtonGroupProps> & {
  classes: typeof buttonGroupClasses
} = ({ size = 'medium', variant = 'outlined', children, ...props }) => {
  const commonProps = useCommonProps(props)

  return (
    <div
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        props.className,
        buttonGroupClasses.root,
      )}
    >
      {React.Children.map(children, (child) => {
        // Check if the child is a valid React element and if it's of type Button.
        if (React.isValidElement(child) && child.type === Button) {
          // Clone the child element (Button) and provide the updated props.
          return React.cloneElement(child, {
            ...child.props,
            size,
            variant,
            disabled: props.disabled || child.props.disabled,
          })
        }

        // If not a Button, return the child unchanged.
        return child
      })}
    </div>
  )
}

ButtonGroup.classes = buttonGroupClasses
