import { useContext } from 'react'
import { defaultTheme } from './defaultTheme'
import { ThemeContext } from './ThemeProvider'
import type { Theme } from './types'

export const useTheme = <T extends Theme>() => {
  const theme = useContext(ThemeContext).theme as T

  return theme ?? defaultTheme
}
