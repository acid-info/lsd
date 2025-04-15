import React from 'react'
import { createPortal } from 'react-dom'
import { useCanUsePortal } from './PortalContext'
import { usePortal } from './usePortal'

export type PortalProps = React.PropsWithChildren & {
  id: string
}

function Portal({ id, children }: PortalProps) {
  const canUse = useCanUsePortal()
  if (!canUse) return <></>

  return <PortalContent id={id}>{children}</PortalContent>
}

function PortalContent({ id, children }: PortalProps) {
  const element = usePortal({ parentId: 'lsd-presentation' })

  if (!element) return <></>

  return createPortal(children, element, id)
}

export { Portal }
