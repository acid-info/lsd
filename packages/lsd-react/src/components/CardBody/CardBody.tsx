import clsx from 'clsx'
import React from 'react'
import { cardBodyClasses } from './CardBody.classes'

export type CardBodyProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'label'
> & {}

export const CardBody: React.FC<CardBodyProps> & {
  classes: typeof cardBodyClasses
} = ({ children, ...props }) => {
  return (
    <div {...props} className={clsx(props.className, cardBodyClasses.root)}>
      {children}
    </div>
  )
}

CardBody.classes = cardBodyClasses
