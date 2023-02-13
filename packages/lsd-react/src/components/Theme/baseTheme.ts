import { css } from '@emotion/react'
import { createThemeGlobalStyles } from './globalStyles'
import { Theme } from './types'

export const baseTheme: Theme = {
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
        label2: {},
        subtitle1: {},
        subtitle2: {},
      },
    },
    xl: {
      width: 1200,
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
      },
    },
  },
  typography: {
    display1: { fontSize: '5.625rem', lineHeight: '6.125rem' },
    display2: { fontSize: '3.5625rem', lineHeight: '4rem' },
    h1: { fontSize: '2.875rem', lineHeight: '3.25rem' },
    h2: { fontSize: '2.25rem', lineHeight: '2.75rem' },
    h3: { fontSize: '2rem', lineHeight: '2.5rem' },
    h4: { fontSize: '1.75rem', lineHeight: '2.25rem' },
    h5: { fontSize: '1.5rem', lineHeight: '2rem' },
    h6: { fontSize: '1.375rem', lineHeight: '1.75rem' },
    subtitle1: { fontSize: '1rem', lineHeight: '1.5rem' },
    subtitle2: { fontSize: '0.875rem', lineHeight: '1.25rem' },
    body1: { fontSize: '1rem', lineHeight: '1.5rem' },
    body2: { fontSize: '0.875rem', lineHeight: '1.25rem' },
    body3: { fontSize: '0.75rem', lineHeight: '1rem' },
    label1: { fontSize: '0.875rem', lineHeight: '1.25rem' },
    label2: { fontSize: '0.75rem', lineHeight: '1rem' },
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
  globalStyles: css``,
}

baseTheme.globalStyles = createThemeGlobalStyles(baseTheme)
