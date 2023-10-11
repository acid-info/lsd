import { baseTheme } from './baseTheme'
import { createTheme } from './createTheme'

const lightTheme = createTheme(
  {
    name: 'Light',
    breakpoints: {},
    typography: {},
    typographyGlobal: {},
    palette: {},
    spacing: [],
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
    spacing: [],
  },
  lightTheme,
)

export const defaultThemes = {
  light: lightTheme,
  dark: darkTheme,
}
