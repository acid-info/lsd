import React from 'react'
import { ButtonProps } from '../Button/Button'
import { CommonProps } from '../../utils/useCommonProps'

export type ButtonGroupContextType = CommonProps & {
  size?: ButtonProps['size']
  variant?: ButtonProps['variant']
  disabled?: boolean
}

export const ButtonGroupContext = React.createContext<ButtonGroupContextType>(
  null as any,
)

export const useButtonGroupContext = () => React.useContext(ButtonGroupContext)
