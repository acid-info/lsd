import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../../utils/useCommonProps'
import { iconClasses } from './Icon.classes'

export type IconProps = CommonProps &
  React.SVGAttributes<SVGElement> & {
    size?: 'small'
    color?: 'primary' | 'secondary'
  }

type IconComponent = React.FC<IconProps> & {
  classes: typeof iconClasses
}

export const Icon = (
  Component: React.ComponentType<React.SVGAttributes<SVGElement>>,
  metadata?: {
    filled?: boolean
    stroked?: boolean
  },
): IconComponent => {
  const IconComponent: IconComponent = ({
    color,
    size = 'small',
    className,
    ...props
  }) => {
    const commonProps = useCommonProps(props)

    return (
      <Component
        className={clsx(
          commonProps.className,
          className,
          iconClasses.root,
          iconClasses[size],
          color && iconClasses[color],
          metadata?.filled && iconClasses.filled,
          metadata?.stroked && iconClasses.stroked,
        )}
        {...omitCommonProps(props)}
      />
    )
  }

  IconComponent.displayName = Component.displayName
  IconComponent.classes = iconClasses

  return IconComponent
}
