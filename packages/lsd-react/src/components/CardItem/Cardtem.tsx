import clsx from 'clsx'
import React from 'react'
import { Typography } from '../Typography'
import { cardItemClasses } from './Cardtem.classes'

export type CardItemProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'label'
> & {
  label: string
  size?: 'small' | 'medium' | 'large'
}

export const CardItem: React.FC<CardItemProps> & {
  classes: typeof cardItemClasses
} = ({ label, size = 'large', ...props }) => {
  return (
    <div
      {...props}
      className={clsx(
        props.className,
        cardItemClasses.root,
        cardItemClasses[size],
      )}
    >
      <Typography
        color="primary"
        component="label"
        variant={size === 'small' ? 'label2' : 'label1'}
      >
        {label}
      </Typography>
    </div>
  )
}

CardItem.classes = cardItemClasses
