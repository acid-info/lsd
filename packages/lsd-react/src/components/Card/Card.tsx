import clsx from 'clsx'
import React from 'react'
import { CardItem } from '../CardItem'
import { Typography } from '../Typography'
import { cardClasses } from './Card.classes'

export type CardProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {
  size?: 'small' | 'medium' | 'large'
  label?: string
  text: string
  withHeader?: boolean
}

export const Card: React.FC<CardProps> & {
  classes: typeof cardClasses
} = ({ label = '', size = 'large', text, withHeader = false, ...props }) => {
  return (
    <>
      {withHeader && <CardItem label={label} size={size} />}
      <div
        {...props}
        className={clsx(
          props.className,
          cardClasses.root,
          cardClasses[size],
          withHeader && cardClasses.withHeader,
        )}
      >
        <Typography
          color="primary"
          component="label"
          variant={size === 'small' ? 'label2' : 'label1'}
          className={cardClasses.text}
        >
          {text}
        </Typography>
      </div>
    </>
  )
}

Card.classes = cardClasses
