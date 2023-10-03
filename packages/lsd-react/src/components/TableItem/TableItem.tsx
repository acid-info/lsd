import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { useTableContext } from '../Table/Table.context'
import { tableItemClasses } from './TableItem.classes'

export type TableItemProps = CommonProps &
  React.HTMLAttributes<HTMLDivElement> & {
    size?: 'large' | 'medium' | 'small'
    truncateContent?: boolean
  }

export const TableItem: React.FC<TableItemProps> & {
  classes: typeof tableItemClasses
} = ({
  size: _size = 'large',
  truncateContent = false,
  children,
  ...props
}) => {
  const commonProps = useCommonProps(props)
  const table = useTableContext()
  const size = table?.size ?? _size

  return (
    <td
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        props.className,
        tableItemClasses.root,
        tableItemClasses[size],
        truncateContent && tableItemClasses.truncateContent,
      )}
    >
      {children}
    </td>
  )
}

TableItem.classes = tableItemClasses
