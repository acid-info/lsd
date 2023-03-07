import clsx from 'clsx'
import React from 'react'
import { DropdownOption } from '../Dropdown'
import { tableBodyClasses } from './TableBody.classes'

export type TableBodyProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'buttonLabel'
> & {
  options?: DropdownOption[]
  buttonLabel?: 'Button'
  size?: 'small' | 'medium' | 'large'
  toolbar?: React.ReactNode
}

export const TableBody: React.FC<TableBodyProps> & {
  classes: typeof tableBodyClasses
} = ({
  options = [],
  size: _size = 'large',
  buttonLabel = 'Button',
  toolbar,
  children,
  ...props
}) => {
  return (
    <div {...props} className={clsx(props.className, tableBodyClasses.root)}>
      {toolbar && (
        <div className={clsx(tableBodyClasses.toolbar)}>{toolbar}</div>
      )}
      <table>{children}</table>
    </div>
  )
}

TableBody.classes = tableBodyClasses
