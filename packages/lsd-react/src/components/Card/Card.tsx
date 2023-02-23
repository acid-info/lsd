import clsx from 'clsx'
import React from 'react'
import { CardBody } from '../CardBody'
import { CardHeader } from '../CardHeader'
import { cardClasses } from './Card.classes'
import { CardContext } from './Card.context'

export type CardProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {
  size?: 'small' | 'medium' | 'large'
}

export const Card: React.FC<CardProps> & {
  classes: typeof cardClasses
} = ({ size = 'large', children }) => {
  return (
    <CardContext.Provider value={{ size }}>{children}</CardContext.Provider>
  )
}

Card.classes = cardClasses
