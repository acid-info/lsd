import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../../utils/useCommonProps'
import { lsdIconClasses } from './LsdIcon.classes'

export type LsdIconProps = CommonProps &
  React.SVGAttributes<SVGElement> & {
    size?: 'small'
    color?: 'primary' | 'secondary'
  }

type LsdIconComponent = React.ComponentType<React.SVGAttributes<SVGElement>>

const classes = lsdIconClasses

function LsdIcon(
  Component: LsdIconComponent,
  metadata?: {
    filled?: boolean
    stroked?: boolean
  },
) {
  const IconComponent = ({
    color,
    size = 'small',
    className,
    ...props
  }: LsdIconProps) => {
    const commonProps = useCommonProps(props)

    return (
      <Component
        className={clsx(
          commonProps.className,
          className,
          classes.root,
          classes[size],
          color && classes[color],
          metadata?.filled && classes.filled,
          metadata?.stroked && classes.stroked,
        )}
        {...omitCommonProps(props)}
      />
    )
  }

  IconComponent.displayName = Component.displayName
  IconComponent.classes = classes

  return IconComponent
}

LsdIcon.classes = classes

export { LsdIcon }
