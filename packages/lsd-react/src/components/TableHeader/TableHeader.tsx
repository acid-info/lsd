import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { tableHeaderClasses } from './TableHeader.classes'

export type TableHeaderProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {
    size?: 'small' | 'medium' | 'large'
  }

const classes = tableHeaderClasses

function TableHeader({
  size: _size = 'large',
  children,
  ...props
}: TableHeaderProps) {
  const commonProps = useCommonProps(props)

  return (
    <div
      {...omitCommonProps(props)}
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

TableHeader.classes = classes

export { TableHeader }
