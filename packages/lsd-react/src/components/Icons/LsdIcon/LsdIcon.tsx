import clsx from 'clsx'
import React from 'react'
import { CommonProps, useCommonProps } from '../../../utils/useCommonProps'
import { lsdIconClasses } from './LsdIcon.classes'

export type LsdIconProps = CommonProps &
  React.SVGAttributes<SVGElement> & {
    size?: 'small'
    color?: 'primary' | 'secondary'
  }

type LsdIconComponent = React.FC<LsdIconProps> & {
  classes: typeof lsdIconClasses
}

export const LsdIcon = (
  Component: React.ComponentType<React.SVGAttributes<SVGElement>>,
  metadata?: {
    filled?: boolean
    stroked?: boolean
  },
): LsdIconComponent => {
  const IconComponent: LsdIconComponent = ({
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
          lsdIconClasses.root,
          lsdIconClasses[size],
          color && lsdIconClasses[color],
          metadata?.filled && lsdIconClasses.filled,
          metadata?.stroked && lsdIconClasses.stroked,
        )}
        {...props}
      />
    )
  }

  IconComponent.displayName = Component.displayName
  IconComponent.classes = lsdIconClasses

  return IconComponent
}
