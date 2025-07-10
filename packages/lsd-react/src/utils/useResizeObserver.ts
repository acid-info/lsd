import { MutableRefObject, useEffect, useMemo } from 'react'
import {
  useDOMRect,
  useResizeObserverAPI,
} from '../components/client/ResizeObserver/ResizeObserverContext'
import { createCounter } from './counter.util'

const defaultValue =
  typeof DOMRectReadOnly === 'undefined'
    ? null
    : new DOMRectReadOnly(0, 0, 0, 0)

const genId = createCounter()

export const useResizeObserver = (
  ref: MutableRefObject<any>,
  refId?: string,
): DOMRect => {
  const api = useResizeObserverAPI()

  const id = useMemo(() => refId ?? genId().toString(), [refId])
  const rect = useDOMRect(id) ?? defaultValue

  useEffect(() => {
    if (!api || !api.ready) return

    if (ref.current) {
      api.observe(id, ref)
    }

    return () => {
      api.unobserve(id)
    }
  }, [api.ready, ref.current])

  return rect
}
