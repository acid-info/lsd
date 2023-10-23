import React, { useEffect, useState } from 'react'
import { PortalContext } from './PortalContext'
import { settleSync } from '../../utils/promise.utils'

export type PortalProviderProps = React.PropsWithChildren

export const PortalProvider: React.FC<PortalProviderProps> = ({ children }) => {
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const body = document.querySelector('body')!
    let container = body.querySelector('#lsd-presentation')
    if (!container) {
      container = document.createElement('div')
      container.id = 'lsd-presentation'
    }
    body.appendChild(container)

    setInitialized(true)

    return () => {
      settleSync(() => body.removeChild(container!))
    }
  }, [])

  return (
    <PortalContext.Provider value={{ initialized }}>
      {children}
    </PortalContext.Provider>
  )
}
