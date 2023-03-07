import clsx from 'clsx'
import React from 'react'
import { useTableContext } from '../Table/Table.context'
import { tableItemClasses } from './TableItem.classes'

export type TableItemProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: 'large' | 'medium' | 'small'
}

export const TableItem: React.FC<TableItemProps> & {
  classes: typeof tableItemClasses
} = ({ size: _size = 'large', children, ...props }) => {
  const table = useTableContext()
  const size = table?.size ?? _size
  return (
    <td
      {...props}
      className={clsx(
        props.className,
        tableItemClasses.root,
        tableItemClasses[size],
      )}
    >
      {children}
    </td>
  )
}

TableItem.classes = tableItemClasses
