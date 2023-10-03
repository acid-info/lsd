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
    onSelectChange?: (rowId?: string) => void
    rowId?: string
    checked?: boolean
  }

export const TableRow: React.FC<TableRowProps> & {
  classes: typeof tableRowClasses
} = ({
  size: _size = 'large',
  type: _type = 'default',
  children,
  onSelectChange,
  rowId,
  checked: isCheckedProp,
  ...props
}) => {
  const commonProps = useCommonProps(props)
  const table = useTableContext()
  const type = table?.type ?? _type

  // State for uncontrolled component behavior
  const [isChecked, setIsChecked] = React.useState(false)
  const isControlled = isCheckedProp !== undefined

  // Set internal state here, if the component is controlled.
  if (isControlled && isCheckedProp != isChecked) setIsChecked(isCheckedProp)

  const handleCheckboxChange = () => {
    if (!isControlled) {
      // Only toggle the internal state if it's an uncontrolled component
      setIsChecked(!isChecked)
    }

    onSelectChange && onSelectChange(rowId)
  }

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
          <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        </td>
      )}
      {type === 'radio' && (
        <td className={tableItemClasses.root}>
          <RadioButton
            value="1"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </td>
      )}
      {children}
    </tr>
  )
}

TableRow.classes = tableRowClasses
