import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import styles from '../Card/Card.module.css'

export type CardBodyProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {}

function CardBody({ children, ...props }: CardBodyProps) {
  const commonProps = useCommonProps(props)

  return (
    <div
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        props.className,
        styles['cardBody'],
      )}
    >
      {children}
    </div>
  )
}

export { CardBody }
