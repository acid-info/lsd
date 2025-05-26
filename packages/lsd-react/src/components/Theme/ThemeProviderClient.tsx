'use client'

import React, { useEffect } from 'react'

import { CSSBaseline } from '../CSSBaseline'
import { ResizeObserverProvider } from '../ResizeObserver'
import { ThemeProviderProps } from './ThemeProvider'
import { ThemeContext } from './ThemeContext'

export function ThemeProviderClient({
  theme,
  children,
  injectCssVars = true,
}: ThemeProviderProps) {
  useEffect(() => {
    const cleanThemeName = theme.name.includes('Light') ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', cleanThemeName)
  }, [theme])

  return (
    <ResizeObserverProvider>
      <ThemeContext.Provider value={{ theme }}>
        <CSSBaseline theme={theme} />
        {injectCssVars && typeof theme.globalStyles === 'string' && (
          <style>{theme.globalStyles}</style>
        )}
        {children}
      </ThemeContext.Provider>
    </ResizeObserverProvider>
  )
}
