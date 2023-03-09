import React from 'react'
import { DropdownOption } from '../Dropdown'
import { TableProps } from './Table'

export type TableContextType = {
  size?: TableProps['size']
  type?: 'default' | 'checkbox' | 'radio'
  value?: string
  headerOptions?: DropdownOption[]
}

export const TableContext = React.createContext<TableContextType>(null as any)

export const useTableContext = () => React.useContext(TableContext)
