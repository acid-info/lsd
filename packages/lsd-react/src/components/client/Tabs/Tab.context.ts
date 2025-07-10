import React from 'react'
import { TabsProps } from './Tabs'

export type TabContextType = {
  activeTab?: string | null
  setActiveTab: (name: string) => void

  size?: TabsProps['size']
}

export const TabsContext = React.createContext<TabContextType>(null as any)

export const useTabsContext = () => React.useContext(TabsContext)
