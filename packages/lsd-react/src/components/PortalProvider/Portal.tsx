import React from 'react'
import { createPortal } from 'react-dom'
import { useCanUsePortal } from './PortalContext'
import { usePortal } from './usePortal'

export type PortalProps = React.PropsWithChildren & {
  id: string
}

export const Portal: React.FC<PortalProps> = ({ id, children }) => {
  const canUse = useCanUsePortal()
  if (!canUse) return <></>

  return <PortalContent id={id}>{children}</PortalContent>
}

const PortalContent: React.FC<PortalProps> = ({ id, children }) => {
  const element = usePortal({ parentId: 'lsd-presentation' })

  if (!element) return <></>

  return createPortal(children, element, id)
}
