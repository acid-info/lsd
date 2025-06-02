import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { DropdownOption } from '../Dropdown'
import styles from './TableBody.module.css'

export type TableBodyProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'buttonLabel'> & {
    options?: DropdownOption[]
    buttonLabel?: 'Button'
    size?: 'small' | 'medium' | 'large'
    toolbar?: React.ReactNode
  }

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
        styles['root-tablebody'],
      )}
    >
      {toolbar && <div className={clsx(styles.toolbar)}>{toolbar}</div>}
      <table>{children}</table>
    </div>
  )
}

export { TableBody }
