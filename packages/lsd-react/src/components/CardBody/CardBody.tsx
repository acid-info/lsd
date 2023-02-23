import clsx from 'clsx'
import React from 'react'
import { useCardContext } from '../Card/Card.context'
import { cardBodyClasses } from './CardBody.classes'

export type CardBodyProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'label'
> & {
  size?: 'small' | 'medium' | 'large'
}

export const CardBody: React.FC<CardBodyProps> & {
  classes: typeof cardBodyClasses
} = ({ size: _size = 'large', children, ...props }) => {
  const sizeContext = useCardContext()
  const size = sizeContext?.size ?? _size
  return (
    <div
      {...props}
      className={clsx(
        props.className,
        cardBodyClasses.root,
        cardBodyClasses[size],
      )}
    >
      {children}
    </div>
  )
}

CardBody.classes = cardBodyClasses
