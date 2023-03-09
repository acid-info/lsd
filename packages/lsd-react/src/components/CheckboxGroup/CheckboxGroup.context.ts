import React from 'react'
import { CheckboxGroupProps } from './CheckboxGroup'

export type CheckboxGroupContextType = {
  size?: CheckboxGroupProps['size']
}

export const CheckboxGroupContext =
  React.createContext<CheckboxGroupContextType>(null as any)

export const useCheckboxGroupContext = () =>
  React.useContext(CheckboxGroupContext)
