import React from 'react'
import { IconButtonProps } from '../IconButton/IconButton'

export type IconButtonGroupContextType = {
  size?: IconButtonProps['size']
  variant?: IconButtonProps['variant']
  disabled?: boolean
}

export const IconButtonGroupContext =
  React.createContext<IconButtonGroupContextType>(null as any)

export const useIconButtonGroupContext = () =>
  React.useContext(IconButtonGroupContext)
