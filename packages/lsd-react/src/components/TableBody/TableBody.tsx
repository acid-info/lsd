import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { DropdownOption } from '../Dropdown'
import { tableBodyClasses } from './TableBody.classes'

export type TableBodyProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'buttonLabel'> & {
    options?: DropdownOption[]
    buttonLabel?: 'Button'
    size?: 'small' | 'medium' | 'large'
    toolbar?: React.ReactNode
  }

const classes = tableBodyClasses

function TableBody({
  options = [],
  size: _size = 'large',
  buttonLabel = 'Button',
  toolbar,
  children,
  ...props
}: TableBodyProps) {
  const commonProps = useCommonProps(props)

  return (
    <div
      {...omitCommonProps(props)}
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

TableBody.classes = classes

export { TableBody }
