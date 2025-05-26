'use client'
import React, { useContext } from 'react'

export type PortalContextType = {
  initialized?: boolean
}

export const PortalContext = React.createContext<PortalContextType>({
  initialized: false,
})

export const useCanUsePortal = (): boolean =>
  useContext(PortalContext)?.initialized ?? false
