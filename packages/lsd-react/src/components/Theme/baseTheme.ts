import { css } from '@emotion/react'
import { createThemeGlobalStyles } from './globalStyles'
import { Theme } from './types'

export const baseTheme: Theme = {
  name: 'LSD',
  breakpoints: {
    xs: {
      width: 0,
      typography: {
        display1: {},
        display2: {},
        h1: {},
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        h6: {},
        body1: {},
        body2: {},
        body3: {},
        label1: {},
        label2: {},
        subtitle1: {},
        subtitle2: {},
        subtitle3: {},
        subtitle4: {},
        subtitle5: {},
      },
    },
    sm: {
      width: 400,
      typography: {
        display1: {},
        display2: {},
        h1: {},
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        h6: {},
        body1: {},
        body2: {},
        body3: {},
        label1: {},
        subtitle5: {},
        subtitle4: {},
        subtitle3: {},
        label2: {},
        subtitle1: {},
        subtitle2: {},
      },
    },
    md: {
      width: 768,
      typography: {
        display1: {},
        display2: {},
        h1: {},
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        h6: {},
        body1: {},
        body2: {},
        body3: {},
        label1: {},
        subtitle5: {},
        subtitle4: {},
        subtitle3: {},
        label2: {},
        subtitle1: {},
        subtitle2: {},
      },
    },
    lg: {
      width: 1024,
      typography: {
        display1: {},
        display2: {},
        h1: {},
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        h6: {},
        body1: {},
        body2: {},
        body3: {},
        label1: {},
        subtitle5: {},
        subtitle4: {},
        subtitle3: {},
        label2: {},
        subtitle1: {},
        subtitle2: {},
      },
    },
    xl: {
      width: 1205,
      typography: {
        display1: {},
        display2: {},
        h1: {},
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        h6: {},
        body1: {},
        body2: {},
        body3: {},
        label1: {},
        subtitle5: {},
        subtitle4: {},
        subtitle3: {},
        label2: {},
        subtitle1: {},
        subtitle2: {},
      },
    },
  },
  typography: {
    display1: {
      fontSize: '5.625rem',
      fontWeight: 'normal',
      lineHeight: '6.125rem',
    },
    display2: {
      fontSize: '3.5625rem',
      fontWeight: 'normal',
      lineHeight: '4rem',
    },
    h1: { fontSize: '2.875rem', fontWeight: 'normal', lineHeight: '3.25rem' },
    h2: { fontSize: '2.25rem', fontWeight: 'normal', lineHeight: '2.75rem' },
    h3: { fontSize: '2rem', fontWeight: 'normal', lineHeight: '2.5rem' },
    h4: { fontSize: '1.75rem', fontWeight: 'normal', lineHeight: '2.25rem' },
    h5: { fontSize: '1.5rem', fontWeight: 'normal', lineHeight: '2rem' },
    h6: { fontSize: '1.375rem', fontWeight: 'normal', lineHeight: '1.75rem' },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 'normal',
      lineHeight: '1.625rem',
    },
    subtitle2: {
      fontSize: '1.125rem',
      fontWeight: 'normal',
      lineHeight: '1.5rem',
    },
    subtitle3: {
      fontSize: '1rem',
      fontWeight: 'normal',
      lineHeight: '1.5rem',
    },
    subtitle4: {
      fontSize: '0.875rem',
      fontWeight: 'normal',
      lineHeight: '1.25rem',
    },
    subtitle5: {
      fontSize: '0.75rem',
      fontWeight: 'normal',
      lineHeight: '1rem',
    },
    body1: { fontSize: '1rem', fontWeight: 'normal', lineHeight: '1.5rem' },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 'normal',
      lineHeight: '1.25rem',
    },
    body3: { fontSize: '0.75rem', fontWeight: 'normal', lineHeight: '1rem' },
    label1: {
      fontSize: '0.875rem',
      fontWeight: 'normal',
      lineHeight: '1.25rem',
    },
    label2: { fontSize: '0.75rem', fontWeight: 'normal', lineHeight: '1rem' },
  },
  typographyGlobal: {
    genericFontFamily: 'sans-serif',
  },
  palette: {
    primary: '0, 0, 0',
    secondary: '255, 255, 255',
    surface: {
      primary: '255, 255, 255',
      secondary: '0, 0, 0',
    },
    text: {
      primary: '0, 0, 0',
      secondary: '255, 255, 255',
      tertiary: '0, 0, 0, 0.34',
    },
    border: {
      primary: '0, 0, 0',
      secondary: '255, 255, 255',
    },
    icon: {
      primary: '0, 0, 0',
      secondary: '255, 255, 255',
    },
  },
  spacing: [4, 8, 16, 24, 32, 40, 64, 80, 96, 120],
  globalStyles: css``,
  cssVars: '',
}

const { cssVars, globalStyles } = createThemeGlobalStyles(baseTheme)

baseTheme.cssVars = cssVars
baseTheme.globalStyles = globalStyles
