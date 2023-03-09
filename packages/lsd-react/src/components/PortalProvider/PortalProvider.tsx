import React, { useEffect, useState } from 'react'
import { PortalContext } from './PortalContext'

export type PortalProviderProps = React.PropsWithChildren

export const PortalProvider: React.FC<PortalProviderProps> = ({ children }) => {
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const body = document.querySelector('body')!
    const container = document.createElement('div')
    container.id = 'lsd-presentation'
    body.appendChild(container)

    setInitialized(true)

    return () => {
      body.removeChild(container)
    }
  }, [])

  return (
    <PortalContext.Provider value={{ initialized }}>
      {children}
    </PortalContext.Provider>
  )
}
