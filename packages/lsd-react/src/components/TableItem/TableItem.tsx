import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { useTableContext } from '../Table/Table.context'
import styles from '../Table/Table.module.css'

export type TableItemProps = CommonProps &
  React.HTMLAttributes<HTMLDivElement> & {
    size?: 'large' | 'medium' | 'small'
  }

function TableItem({
  size: _size = 'large',
  children,
  ...props
}: TableItemProps) {
  const commonProps = useCommonProps(props)
  const table = useTableContext()
  const size = table?.size ?? _size

  return (
    <td
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        props.className,
        styles.tableItem,
        styles[size],
      )}
    >
      {children}
    </td>
  )
}

export { TableItem }
