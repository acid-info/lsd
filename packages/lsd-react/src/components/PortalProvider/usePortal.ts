'use client'
import { useEffect, useRef } from 'react'

interface Props {
  parentId: string
}

export const usePortal = ({ parentId }: Props) => {
  const elementRef = useRef<HTMLElement | null>(null)

  if (typeof window !== 'undefined' && !elementRef.current) {
    elementRef.current = document.createElement('div')
  }

  useEffect(() => {
    if (typeof window === 'undefined' || !elementRef.current) return

    const parentElements = document.querySelectorAll(`#${parentId}`)

    // In some places (e.g. storybook), there may be multiple portal containers when a component
    // is rendered multiple times. Here, we append only to the last found parent element.
    // This is because usually the last parent is the most recently rendered one.
    // Without this, we may append to a parent that is about to be removed from the DOM.
    parentElements[parentElements.length - 1]?.appendChild(elementRef.current)

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
