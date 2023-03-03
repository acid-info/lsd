import React from 'react'
import { ActiveCheckboxType, CheckboxGroupProps } from './CheckboxGroup'

export type CheckboxGroupContextType = {
  activeCheckbox?: ActiveCheckboxType | null
  setActiveCheckbox: (value: ActiveCheckboxType) => void

  size?: CheckboxGroupProps['size']
}

export const CheckboxGroupContext =
  React.createContext<CheckboxGroupContextType>(null as any)

export const useCheckboxGroupContext = () =>
  React.useContext(CheckboxGroupContext)
