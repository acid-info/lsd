import { useContext } from 'react'
import { defaultThemes } from './defaultThemes'

import type { Theme } from './types'
import { ThemeContext } from './ThemeContext'

export const useTheme = <T extends Theme>() => {
  const theme = useContext(ThemeContext).theme as T

  return theme ?? defaultThemes.light
}
