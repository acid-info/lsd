import clsx from 'clsx'
import React from 'react'
import { Typography } from '../Typography'
import { cardHeaderClasses } from './CardHeader.classes'

export type CardHeaderProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'label'
> & {
  label: string
  size?: 'small' | 'medium' | 'large'
}

export const CardHeader: React.FC<CardHeaderProps> & {
  classes: typeof cardHeaderClasses
} = ({ label, size = 'large', ...props }) => {
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
        color="primary"
        component="label"
        variant={size === 'small' ? 'label2' : 'label1'}
      >
        {label}
      </Typography>
    </div>
  )
}

CardHeader.classes = cardHeaderClasses
