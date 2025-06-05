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
        ? `:root, [data-theme="${themeName}"]`
        : `[data-theme="${themeName}"]`

    if (theme.cssVars) {
      combinedCSS += `${selector} {\n${theme.cssVars}\n}\n\n`
    }

    if (theme.globalStyles) {
      combinedCSS += `[data-theme="${themeName}"] {\n${theme.globalStyles}\n}\n\n`
    }
  }

  const ThemeStyles = (
    <style
      id="lsd-theme-styles"
      dangerouslySetInnerHTML={{ __html: combinedCSS }}
    />
  )

  return {
    themeName: activeThemeName,
    ThemeStyles,
    availableThemes,
  }
}
