import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import React from 'react'
import { CSSBaseline } from '../CSSBaseline'
import { PortalProvider } from '../PortalProvider'
import { ResizeObserverProvider } from '../ResizeObserver'
import { Theme } from './types'

export type ThemeProviderProps = React.PropsWithChildren<{
  theme: Theme
}>

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  return (
    <ResizeObserverProvider>
      <PortalProvider>
        <ThemeContext.Provider value={{ theme }}>
          <CSSBaseline theme={theme} />
          <Global styles={theme.globalStyles} />
          <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
        </ThemeContext.Provider>
      </PortalProvider>
    </ResizeObserverProvider>
  )
}

export const ThemeContext = React.createContext({
  theme: null as any,
})
