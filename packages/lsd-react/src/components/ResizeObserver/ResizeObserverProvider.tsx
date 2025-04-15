import omit from 'lodash/omit'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { settleSync } from '../../utils/promise.utils'
import { ResizeObserverContext } from './ResizeObserverContext'

function ResizeObserverProvider({ children }: React.PropsWithChildren<{}>) {
  const ro = useRef<ResizeObserver | null>(null)
  const elements = useRef<Record<string, MutableRefObject<Element>>>({})
  const [rects, setRects] = useState<Record<string, DOMRect>>({})
  const [ready, setReady] = useState(false)

  const onChange = (id: string) => {
    const el = elements.current[id]
    if (!el || !el.current) return

    settleSync(() => {
      setRects((val) => ({
        ...val,
        [id]: el.current.getBoundingClientRect(),
      }))
    })
  }

  useEffect(() => {
    if (typeof window === 'undefined' || typeof ResizeObserver === 'undefined')
      return

    ro.current = new ResizeObserver((entries) => {
      settleSync(() => {
        const arr = Object.entries(elements.current)
        entries
          .map((entry) => arr.find(([id, ref]) => ref.current === entry.target))
          .forEach((map) => {
            if (map && map.length === 2) {
              const [id] = map
              onChange(id)
            }
          })
      })
    })

    setReady(true)

    return () => {
      ro.current?.disconnect()
    }
  }, [])

  const observe = (id: string, elementRef: MutableRefObject<Element>) => {
    if (!ro.current) return

    elements.current[id] = elementRef
    onChange(id)
    elementRef.current instanceof Element &&
      ro.current.observe(elementRef.current)
  }

  const unobserve = (id: string) => {
    if (!ro.current) return

    const el = elements.current[id]
    if (!el) return

    el.current instanceof Element && ro.current.unobserve(el.current)
    delete elements.current[id]
    setRects((val) => omit(val, id))
  }

  return (
    <ResizeObserverContext.Provider
      value={{
        observe,
        unobserve,
        rect: rects,
        ready,
      }}
    >
      {children}
    </ResizeObserverContext.Provider>
  )
}

export { ResizeObserverProvider }
