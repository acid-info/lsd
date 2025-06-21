import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { CardContext } from './Card.context'
import styles from './Card.module.css'

export type CardProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {
    size?: 'small' | 'medium' | 'large'
  }

function Card({ size = 'large', children, ...props }: CardProps) {
  const commonProps = useCommonProps(props)

  return (
    <CardContext.Provider value={{ size }}>
      <div
        {...omitCommonProps(props)}
        className={clsx(
          commonProps.className,
          styles['root-card'],
          styles[size],
        )}
      >
        {children}
      </div>
    </CardContext.Provider>
  )
}

export { Card }
