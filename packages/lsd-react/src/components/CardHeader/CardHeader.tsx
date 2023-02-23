import clsx from 'clsx'
import React from 'react'
import { useCardContext } from '../Card/Card.context'
import { Typography } from '../Typography'
import { cardHeaderClasses } from './CardHeader.classes'

export type CardHeaderProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'label'
> & {
  size?: 'small' | 'medium' | 'large'
}

export const CardHeader: React.FC<CardHeaderProps> & {
  classes: typeof cardHeaderClasses
} = ({ size: _size = 'large', children, ...props }) => {
  const sizeContext = useCardContext()
  const size = sizeContext?.size ?? _size

  return (
    <div
      {...props}
      className={clsx(
        props.className,
        cardHeaderClasses.root,
        cardHeaderClasses[size],
      )}
    >
      <Typography
        className={cardHeaderClasses.title}
        component="div"
        variant={size === 'large' ? 'label1' : 'label2'}
      >
        {children}
      </Typography>
    </div>
  )
}

CardHeader.classes = cardHeaderClasses
