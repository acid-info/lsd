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
      background: {
        primary: '#000',
      },
      surface: {
        primary: '#fff',
      },
      text: {
        primary: 'rgb(255, 255, 255)',
      },
    },
  },
  lightTheme,
)

export const defaultThemes = {
  light: lightTheme,
  dark: darkTheme,
}
