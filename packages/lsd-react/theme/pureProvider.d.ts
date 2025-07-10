import type { Theme } from './types'
export interface PrepareLsdThemeProps {
  customThemes?: Record<string, Theme>
  initialTheme?: string
  getInitialTheme?: () => string
}
export declare const ThemeAttribute = 'data-theme'
export declare function generateLsdVars({
  customThemes,
  initialTheme,
  getInitialTheme,
}?: PrepareLsdThemeProps): string
