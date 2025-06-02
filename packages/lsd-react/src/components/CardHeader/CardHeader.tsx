import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { useCardContext } from '../Card/Card.context'
import { Typography } from '../Typography'
import styles from './CardHeader.module.css'

export type CardHeaderProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {
    size?: 'small' | 'medium' | 'large'
  }

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
        styles['root-cardheader'],
        styles[size],
      )}
    >
      <Typography
        className={styles.title}
        component="div"
        variant={size === 'large' ? 'label1' : 'label2'}
      >
        {children}
      </Typography>
    </div>
  )
}

export { CardHeader }
