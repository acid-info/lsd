import clsx from 'clsx'
import React from 'react'
import { CardHeader } from '../CardHeader'
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
    <div>
      {withHeader && <CardHeader label={label} size={size} />}
      <div
        className={clsx(
          props.className,
          cardClasses.root,
          cardClasses[size],
          withHeader && cardClasses.withHeader,
        )}
        {...props}
      >
        <Typography
          color="primary"
          component="label"
          variant={size === 'small' ? 'label2' : 'label1'}
          className={clsx(cardClasses.text)}
        >
          {text}
        </Typography>
      </div>
    </div>
  )
}

Card.classes = cardClasses
