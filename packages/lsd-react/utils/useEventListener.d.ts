export declare const useEventListener: <
  T = any,
  E extends {
    addEventListener: any
    removeEventListener: any
  } = any,
>(
  key: string | (() => string),
  element: E | (() => E),
  listener: (event: T) => void,
  options?: boolean | AddEventListenerOptions,
  deps?: any[],
) => void
