import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { DropdownOption } from '../Dropdown'
import { TableBody } from '../TableBody'
import { TableHeader } from '../TableHeader'
import styles from './Table.module.css'
import { TableContext } from './Table.context'

export type TableProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {
    size?: 'small' | 'medium' | 'large'
    type?: 'default' | 'checkbox' | 'radio'
    headerOptions?: DropdownOption[]
    header?: React.ReactNode
    toolbar?: React.ReactNode
  }

function Table({
  size = 'large',
  type = 'default',
  headerOptions,
  header,
  toolbar,
  children,
  ...props
}: TableProps) {
  const commonProps = useCommonProps(props)

  return (
    <TableContext.Provider value={{ size, type, headerOptions }}>
      <div
        {...omitCommonProps(props)}
        className={clsx(
          commonProps.className,
          styles['root-table'],
          styles[size],
        )}
      >
        <TableHeader>{header}</TableHeader>
        <TableBody toolbar={toolbar} options={headerOptions}>
          {children}
        </TableBody>
      </div>
    </TableContext.Provider>
  )
}

export { Table }
