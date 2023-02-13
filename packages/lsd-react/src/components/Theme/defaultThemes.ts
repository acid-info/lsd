import { baseTheme } from './baseTheme'
import { createTheme } from './createTheme'

const lightTheme = createTheme(
  {
    breakpoints: {},
    typography: {},
    palette: {},
  },
  baseTheme,
)

const darkTheme = createTheme(
  {
    breakpoints: {},
    typography: {},
    palette: {
      primary: '255, 255, 255',
      secondary: '0, 0, 0',
    },
  },
  lightTheme,
)

export const defaultThemes = {
  light: lightTheme,
  dark: darkTheme,
}
