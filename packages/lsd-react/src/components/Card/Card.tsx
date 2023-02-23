import clsx from 'clsx'
import React from 'react'
import { cardClasses } from './Card.classes'
import { CardContext } from './Card.context'

export type CardProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {
  size?: 'small' | 'medium' | 'large'
}

export const Card: React.FC<CardProps> & {
  classes: typeof cardClasses
} = ({ size = 'large', children, ...props }) => {
  return (
    <CardContext.Provider value={{ size }}>
      <div {...props} className={clsx(cardClasses.root, cardClasses[size])}>
        {children}
      </div>
    </CardContext.Provider>
  )
}

Card.classes = cardClasses
