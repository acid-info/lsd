import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { cardClasses } from './Card.classes'
import { CardContext } from './Card.context'

export type CardProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {
    size?: 'small' | 'medium' | 'large'
  }

const classes = cardClasses

function Card({ size = 'large', children, ...props }: CardProps) {
  const commonProps = useCommonProps(props)

  return (
    <CardContext.Provider value={{ size }}>
      <div
        {...omitCommonProps(props)}
        className={clsx(
          commonProps.className,
          cardClasses.root,
          cardClasses[size],
        )}
      >
        {children}
      </div>
    </CardContext.Provider>
  )
}

Card.classes = classes

export { Card }
