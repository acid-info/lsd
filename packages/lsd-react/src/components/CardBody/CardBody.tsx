import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { cardBodyClasses } from './CardBody.classes'

export type CardBodyProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {}

const classes = cardBodyClasses

function CardBody({ children, ...props }: CardBodyProps) {
  const commonProps = useCommonProps(props)

  return (
    <div
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        props.className,
        cardBodyClasses.root,
      )}
    >
      {children}
    </div>
  )
}

CardBody.classes = classes

export { CardBody }
