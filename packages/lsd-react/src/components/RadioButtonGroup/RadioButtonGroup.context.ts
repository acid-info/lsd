import React from 'react'
import {
  ActiveRadioButtonType,
  RadioButtonGroupProps,
} from './RadioButtonGroup'

export type RadioButtonGroupContextType = {
  value?: ActiveRadioButtonType | null
  setActiveValue: (value: ActiveRadioButtonType) => void

  size?: RadioButtonGroupProps['size']
}

export const RadioButtonGroupContext =
  React.createContext<RadioButtonGroupContextType>(null as any)

export const useRadioButtonGroupContext = () =>
  React.useContext(RadioButtonGroupContext)
