import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useEventListener } from './useEventListener'
import { useResizeObserver } from './useResizeObserver'

export type UseHorizontalScrollReturnType = {
  right: number
  left: number
  toRight: (width?: number) => void
  toLeft: (width?: number) => void
}

const calcAvailableWidth = (
  direction: number,
  scrollLeft: number,
  scrollWidth: number,
  clientWidth: number,
) => (direction === -1 ? scrollLeft : scrollWidth - (clientWidth + scrollLeft))

export const useHorizontalScroll = (
  ref: React.MutableRefObject<HTMLElement>,
  options?: {
    scrollBehavior?: ScrollBehavior
    deps?: any[]
  },
) => {
  const rect = useResizeObserver(ref)
  const [scroll, setScroll] = useState(ref?.current?.scrollLeft ?? 0)
  const [leftAvailableWidth, setLeftAvailableWidth] = useState(0)
  const [rightAvailableWidth, setRightAvailableWidth] = useState(0)

  const timeoutRef = useRef(null)

  useEventListener<MouseEvent>(
    'scroll',
    ref.current,
    (event) => {
      setScroll((event.target as HTMLDivElement).scrollLeft)
    },
    { passive: true },
    [],
  )

  const onChange = () => {
    timeoutRef.current && clearTimeout(timeoutRef.current)

    if (!ref.current) return
    const { scrollLeft, scrollWidth, clientWidth } = ref.current

    setRightAvailableWidth(
      calcAvailableWidth(1, scrollLeft, scrollWidth, clientWidth),
    )
    setLeftAvailableWidth(
      calcAvailableWidth(-1, scrollLeft, scrollWidth, clientWidth),
    )
  }

  useEffect(onChange, [rect, scroll, options?.deps])

  const toScroll = (direction: number, width?: number) => {
    const { clientWidth, scrollLeft } = ref.current

    const firstChildInViewport = Array.from(ref.current.childNodes).find(
      (child) => (child as HTMLElement).getBoundingClientRect().x >= 0,
    )

    const w = Math.max(
      width ?? clientWidth / 3,
      firstChildInViewport
        ? (firstChildInViewport as HTMLElement).clientWidth
        : 0,
    )

    ref.current.scrollTo({
      behavior: options?.scrollBehavior ?? 'smooth',
      left: scrollLeft + w * direction,
    })
  }

  return useMemo<UseHorizontalScrollReturnType>(
    () => ({
      right: rightAvailableWidth,
      left: leftAvailableWidth,
      toRight: toScroll.bind(null, 1),
      toLeft: toScroll.bind(null, -1),
    }),
    [rightAvailableWidth, leftAvailableWidth],
  )
}
