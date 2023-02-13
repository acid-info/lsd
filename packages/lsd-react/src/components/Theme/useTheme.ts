import { useContext } from 'react'
import { defaultThemes } from './defaultThemes'
import { ThemeContext } from './ThemeProvider'
import type { Theme } from './types'

export const useTheme = <T extends Theme>() => {
  const theme = useContext(ThemeContext).theme as T

  return theme ?? defaultThemes.light
}
