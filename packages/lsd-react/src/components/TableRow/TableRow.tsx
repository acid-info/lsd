import clsx from 'clsx'
import React from 'react'
import { Checkbox } from '../Checkbox'
import { RadioButton } from '../RadioButton'
import { useTableContext } from '../Table/Table.context'
import { tableItemClasses } from '../TableItem/TableItem.classes'
import { tableRowClasses } from './TableRow.classes'

export type TableRowProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: 'large' | 'medium' | 'small'
  type?: 'default' | 'checkbox' | 'radio'
}

export const TableRow: React.FC<TableRowProps> & {
  classes: typeof tableRowClasses
} = ({
  size: _size = 'large',
  type: _type = 'default',
  children,
  ...props
}) => {
  const table = useTableContext()
  const type = table?.type ?? _type

  return (
    <tr {...props} className={clsx(props.className, tableRowClasses.root)}>
      {type === 'checkbox' && (
        <td className={tableItemClasses.root}>
          <Checkbox />
        </td>
      )}
      {type === 'radio' && (
        <td className={tableItemClasses.root}>
          <RadioButton value="1" />
        </td>
      )}
      {children}
    </tr>
  )
}

TableRow.classes = tableRowClasses
