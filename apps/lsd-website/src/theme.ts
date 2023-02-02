import { createTheme } from '@acid-info/lsd-react'

export const light = createTheme({
  breakpoints: {
    xs: {},
    sm: {},
    lg: {},
    xl: {},
  },
  typography: {},
  palette: {
    surface: {},
  },
})

export const dark = createTheme(
  {
    breakpoints: {},
    typography: {},
    palette: {
      background: {
        primary: 'black',
      },
      surface: {
        primary: 'white',
      },
      text: {
        primary: 'white',
      },
    },
  },
  light,
)
