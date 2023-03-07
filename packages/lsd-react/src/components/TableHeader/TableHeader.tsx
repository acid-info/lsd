import clsx from 'clsx'
import React from 'react'
import { tableHeaderClasses } from './TableHeader.classes'

export type TableHeaderProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'label'
> & {
  size?: 'small' | 'medium' | 'large'
}

export const TableHeader: React.FC<TableHeaderProps> & {
  classes: typeof tableHeaderClasses
} = ({ size: _size = 'large', children, ...props }) => {
  return (
    <div {...props} className={clsx(props.className, tableHeaderClasses.root)}>
      {children}
    </div>
  )
}

TableHeader.classes = tableHeaderClasses
