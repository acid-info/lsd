import { createContext, MutableRefObject, useContext, useMemo } from 'react'

export interface IResizeObserverContext {
  observe: (id: string, ref: MutableRefObject<Element>) => void
  unobserve: (id: string) => void

  ready?: boolean
  rect: Record<string, DOMRect>
}

export const ResizeObserverContext = createContext<IResizeObserverContext>(
  null as any,
)

export const useResizeObserverAPI = () => {
  const { observe, unobserve, ready } = useContext(ResizeObserverContext) ?? {}

  return useMemo(
    () => ({
      observe,
      unobserve,
      ready,
    }),
    [observe, unobserve, ready],
  )
}

export const useDOMRect = (id: string, defaultValue?: any) => {
  const ctx = useContext(ResizeObserverContext)

  return ctx?.rect?.[id] ?? defaultValue
}
