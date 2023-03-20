import { baseTheme } from './baseTheme'
import { createTheme } from './createTheme'

const lightTheme = createTheme(
  {
    name: 'Light',
    breakpoints: {},
    typography: {},
    typographyGlobal: {},
    palette: {},
  },
  baseTheme,
)

const darkTheme = createTheme(
  {
    name: 'Dark',
    breakpoints: {},
    typography: {},
    typographyGlobal: {},
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
