import { useState, useEffect } from 'react'
import { ThemeAttribute } from './pureProvider'
import { extractLsdVars } from '../../utils/dom.util'

export const useTheme = () => {
  const readThemeName = () => {
    if (typeof window === 'undefined') return null
    return document.documentElement.getAttribute(ThemeAttribute) || null
  }

  const [themeName, setThemeName] = useState<string | null>(readThemeName)
  const [cssVars, setCssVars] = useState<Record<string, string>>({})

  useEffect(() => {
    if (typeof window === 'undefined') return

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === ThemeAttribute) {
          setThemeName(readThemeName())
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [ThemeAttribute],
    })

    if (themeName === null) {
      setThemeName(readThemeName())
    } else {
      setCssVars(extractLsdVars(themeName))
    }

    return () => observer.disconnect()
  }, [themeName])

  return { themeName, cssVars }
}
