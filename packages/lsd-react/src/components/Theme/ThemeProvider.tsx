import { Theme } from './types'

export type ThemeProviderProps = React.PropsWithChildren<{
  theme: Theme
  injectCssVars?: boolean
}>

export function ThemeProvider({
  theme,
  children,
  injectCssVars,
}: ThemeProviderProps) {
  return <>{children}</>
}
