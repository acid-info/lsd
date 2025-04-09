import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { useCardContext } from '../Card/Card.context'
import { Typography } from '../Typography'
import { cardHeaderClasses } from './CardHeader.classes'

export type CardHeaderProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {
    size?: 'small' | 'medium' | 'large'
  }

const classes = cardHeaderClasses

function CardHeader({
  size: _size = 'large',
  children,
  ...props
}: CardHeaderProps) {
  const commonProps = useCommonProps(props)
  const sizeContext = useCardContext()
  const size = sizeContext?.size ?? _size

  return (
    <div
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
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

CardHeader.classes = classes

export { CardHeader }
