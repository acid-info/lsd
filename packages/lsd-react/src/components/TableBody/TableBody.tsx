import clsx from 'clsx'
import React from 'react'
import { CommonProps, useCommonProps } from '../../utils/useCommonProps'
import { DropdownOption } from '../Dropdown'
import { tableBodyClasses } from './TableBody.classes'

export type TableBodyProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'buttonLabel'> & {
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
  const commonProps = useCommonProps(props)

  return (
    <div
      {...props}
      className={clsx(
        commonProps.className,
        props.className,
        tableBodyClasses.root,
      )}
    >
      {toolbar && (
        <div className={clsx(tableBodyClasses.toolbar)}>{toolbar}</div>
      )}
      <table>{children}</table>
    </div>
  )
}

TableBody.classes = tableBodyClasses
