import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import styles from './TableHeader.module.css'

export type TableHeaderProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {
    size?: 'small' | 'medium' | 'large'
  }

function TableHeader({
  size: _size = 'large',
  children,
  ...props
}: TableHeaderProps) {
  const commonProps = useCommonProps(props)

  return (
    <div
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        props.className,
        styles['root-tableheader'],
      )}
    >
      {children}
    </div>
  )
}

export { TableHeader }
