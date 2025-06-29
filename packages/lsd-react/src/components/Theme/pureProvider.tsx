import { JSX } from 'react'
import { defaultThemes } from './defaultThemes'
import type { Theme } from './types'

export interface PrepareLsdThemeProps {
  customThemes?: Record<string, Theme>
  initialTheme?: string
  getInitialTheme?: () => string
}

export interface PreparedLsdTheme {
  themeName: string
  ThemeStyles: JSX.Element
  availableThemes: string[]
}

export const ThemeAttribute = 'data-theme'
export const LsdStyleTag = 'lsd-theme-styles'

export function prepareLsdTheme({
  customThemes = {},
  initialTheme,
  getInitialTheme,
}: PrepareLsdThemeProps = {}): PreparedLsdTheme {
  const resolvedInitialTheme = getInitialTheme?.() || initialTheme || 'light'

  const allThemes = {
    ...defaultThemes, // { light: Theme, dark: Theme }
    ...customThemes, // user's themes created with createTheme()
  }

  const availableThemes = Object.keys(allThemes)
  const activeThemeName = availableThemes.includes(resolvedInitialTheme)
    ? resolvedInitialTheme
    : 'light'

  let combinedCSS = ''
  for (const [themeName, theme] of Object.entries(allThemes)) {
    const selector =
      themeName === activeThemeName
        ? `:root, [${ThemeAttribute}="${themeName}"]`
        : `[${ThemeAttribute}="${themeName}"]`

    if (theme.cssVars) {
      combinedCSS += `${selector} {\n${theme.cssVars}\n}\n\n`
    }

    if (theme.globalStyles) {
      combinedCSS += `[${ThemeAttribute}="${themeName}"] {\n${theme.globalStyles}\n}\n\n`
    }
  }

  const ThemeStyles = (
    <style id={LsdStyleTag} dangerouslySetInnerHTML={{ __html: combinedCSS }} />
  )

  return {
    themeName: activeThemeName,
    ThemeStyles,
    availableThemes,
  }
}
