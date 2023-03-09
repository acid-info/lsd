import { useEffect, useRef } from 'react'

interface Props {
  parentId: string
}

export const usePortal = ({ parentId }: Props) => {
  const elementRef = useRef<HTMLElement>()

  if (typeof window !== 'undefined' && !elementRef.current) {
    elementRef.current = document.createElement('div')
  }

  useEffect(() => {
    if (typeof window === 'undefined' || !elementRef.current) return
    document.getElementById(parentId)?.appendChild(elementRef.current)

    return () => {
      try {
        document
          .getElementById(parentId)
          ?.removeChild(elementRef.current as Node)
      } catch (error) {}
    }
  }, [parentId, elementRef.current])

  return elementRef.current
}
