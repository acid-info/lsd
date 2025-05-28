import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import React, { useEffect } from 'react'
import { PortalProvider } from '../PortalProvider'
import { ResizeObserverProvider } from '../ResizeObserver'
import { Theme } from './types'

export type ThemeProviderProps = React.PropsWithChildren<{
  theme: Theme
  injectCssVars?: boolean
}>

function ThemeProvider({
  theme,
  children,
  injectCssVars = true,
}: ThemeProviderProps) {
  useEffect(() => {
    // temporary while Emotion is still in place. `theme` prop should be passed as string: light | dark
    const cleanThemeName = theme.name.includes('Light') ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', cleanThemeName)
  }, [theme])

  return (
    <ResizeObserverProvider>
      <PortalProvider>
        <ThemeContext.Provider value={{ theme }}>
          {injectCssVars && <Global styles={theme.globalStyles} />}
          <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
        </ThemeContext.Provider>
      </PortalProvider>
    </ResizeObserverProvider>
  )
}

export const ThemeContext = React.createContext({
  theme: null as any,
})

export { ThemeProvider }
