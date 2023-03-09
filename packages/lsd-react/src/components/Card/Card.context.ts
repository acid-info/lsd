import React from 'react'
import { CardProps } from './Card'

export type CardContextType = {
  size?: CardProps['size']
}

export const CardContext = React.createContext<CardContextType>(null as any)

export const useCardContext = () => React.useContext(CardContext)
