import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../../../utils/useCommonProps'
import styles from './LsdIcon.module.css'

export type LsdIconProps = CommonProps &
  React.SVGAttributes<SVGElement> & {
    size?: 'small'
    color?: 'primary' | 'secondary'
  }

type LsdIconComponent = React.ComponentType<React.SVGAttributes<SVGElement>>

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
          styles['root-lsdicon'],
          styles[size],
          color && styles[color],
          metadata?.filled && styles.filled,
          metadata?.stroked && styles.stroked,
        )}
        {...omitCommonProps(props)}
      />
    )
  }

  IconComponent.displayName = Component.displayName

  return IconComponent
}

export { LsdIcon }
