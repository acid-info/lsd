import { useEffect, useMemo } from 'react'

export const useEventListener = <
  T = any,
  E extends { addEventListener: any; removeEventListener: any } = any,
>(
  key: string | (() => string),
  element: E | (() => E),
  listener: (event: T) => void,
  options?: boolean | AddEventListenerOptions,
  deps?: any[],
) => {
  const _key = useMemo(() => (typeof key === 'string' ? key : key()), [])
  const _element = useMemo(
    () => (typeof element === 'function' ? element() : element),
    [element],
  )

  useEffect(() => {
    if (!_element?.addEventListener || !_element?.removeEventListener) return

    _element.addEventListener(_key, listener, options)

    return () => {
      _element.removeEventListener(_key, listener, options)
    }
  }, [_key, _element])
}
