import { Theme } from './types'
declare const generateThemeGlobalStyles: (theme: Theme) => {
  cssVars: string
}
export declare const createThemeGlobalStyles: (
  theme: Theme,
) => ReturnType<typeof generateThemeGlobalStyles>
export {}
