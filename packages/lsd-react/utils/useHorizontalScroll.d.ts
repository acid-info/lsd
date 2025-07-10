import React from 'react'
export type UseHorizontalScrollReturnType = {
  right: number
  left: number
  toRight: (width?: number) => void
  toLeft: (width?: number) => void
}
export declare const useHorizontalScroll: (
  ref: React.MutableRefObject<HTMLElement>,
  options?: {
    scrollBehavior?: ScrollBehavior
    deps?: any[]
  },
) => UseHorizontalScrollReturnType
