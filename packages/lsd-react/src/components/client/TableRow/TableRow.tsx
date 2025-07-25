import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../../utils/useCommonProps'
import { Checkbox } from '../Checkbox'
import { RadioButton } from '../RadioButton'
import { useTableContext } from '../Table/Table.context'
import styles from '../Table/Table.module.css'

export type TableRowProps = CommonProps &
  React.HTMLAttributes<HTMLDivElement> & {
    size?: 'large' | 'medium' | 'small'
    type?: 'default' | 'checkbox' | 'radio'
  }

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
      className={clsx(commonProps.className, props.className, styles.tableRow)}
    >
      {type === 'checkbox' && (
        <td className={styles.tableItem}>
          <Checkbox />
        </td>
      )}
      {type === 'radio' && (
        <td className={styles.tableItem}>
          <RadioButton value="1" />
        </td>
      )}
      {children}
    </tr>
  )
}

export { TableRow }
