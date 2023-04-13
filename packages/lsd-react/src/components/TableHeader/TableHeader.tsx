import clsx from 'clsx'
import React from 'react'
import { CommonProps, useCommonProps } from '../../utils/useCommonProps'
import { tableHeaderClasses } from './TableHeader.classes'

export type TableHeaderProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {
    size?: 'small' | 'medium' | 'large'
  }

export const TableHeader: React.FC<TableHeaderProps> & {
  classes: typeof tableHeaderClasses
} = ({ size: _size = 'large', children, ...props }) => {
  const commonProps = useCommonProps(props)

  return (
    <div
      {...props}
      className={clsx(
        commonProps.className,
        props.className,
        tableHeaderClasses.root,
      )}
    >
      {children}
    </div>
  )
}

TableHeader.classes = tableHeaderClasses
