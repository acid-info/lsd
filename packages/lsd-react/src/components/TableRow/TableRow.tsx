import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { Checkbox } from '../Checkbox'
import { RadioButton } from '../RadioButton'
import { useTableContext } from '../Table/Table.context'
import { tableItemClasses } from '../TableItem/TableItem.classes'
import { tableRowClasses } from './TableRow.classes'

export type TableRowProps = CommonProps &
  React.HTMLAttributes<HTMLDivElement> & {
    size?: 'large' | 'medium' | 'small'
    type?: 'default' | 'checkbox' | 'radio'
  }

const classes = tableRowClasses

function TableRow({
  size: _size = 'large',
  type: _type = 'default',
  children,
  ...props
}: TableRowProps) {
  const commonProps = useCommonProps(props)
  const table = useTableContext()
  const type = table?.type ?? _type

  return (
    <tr
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        props.className,
        tableRowClasses.root,
      )}
    >
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

TableRow.classes = classes

export { TableRow }
