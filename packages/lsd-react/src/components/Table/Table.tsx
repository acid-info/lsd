import clsx from 'clsx'
import React from 'react'
import { CommonProps, useCommonProps } from '../../utils/useCommonProps'
import { DropdownOption } from '../Dropdown'
import { TableBody } from '../TableBody'
import { TableHeader } from '../TableHeader'
import { tableClasses } from './Table.classes'
import { TableContext } from './Table.context'

export type TableProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {
    size?: 'small' | 'medium' | 'large'
    type?: 'default' | 'checkbox' | 'radio'
    headerOptions?: DropdownOption[]
    header?: React.ReactNode
    toolbar?: React.ReactNode
  }

export const Table: React.FC<TableProps> & {
  classes: typeof tableClasses
} = ({
  size = 'large',
  type = 'default',
  headerOptions,
  header,
  toolbar,
  children,
  ...props
}) => {
  const commonProps = useCommonProps(props)

  return (
    <TableContext.Provider value={{ size, type, headerOptions }}>
      <div
        {...props}
        className={clsx(
          commonProps.className,
          tableClasses.root,
          tableClasses[size],
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

Table.classes = tableClasses
