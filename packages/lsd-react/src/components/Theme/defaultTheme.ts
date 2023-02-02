import { css } from '@emotion/react'
import { createThemeGlobalStyles } from './globalStyles'
import { Theme } from './types'

export const defaultTheme: Theme = {
  breakpoints: {
    xs: {
      width: 0,
      typography: {
        headlineLg: {},
        headlineMd: {},
        headlineStd: {},
        headlineSm: {},
        titleLg: {},
        titleMd: {},
        titleSm: {},
        bodyLg: {},
        bodyMd: {},
        bodySm: {},
        labelLg: {},
        labelMd: {},
        labelSm: {},
      },
    },
    sm: {
      width: 400,
      typography: {
        headlineLg: {},
        headlineMd: {},
        headlineStd: {},
        headlineSm: {},
        titleLg: {},
        titleMd: {},
        titleSm: {},
        bodyLg: {},
        bodyMd: {},
        bodySm: {},
        labelLg: {},
        labelMd: {},
        labelSm: {},
      },
    },
    md: {
      width: 768,
      typography: {
        headlineLg: {},
        headlineMd: {},
        headlineStd: {},
        headlineSm: {},
        titleLg: {},
        titleMd: {},
        titleSm: {},
        bodyLg: {},
        bodyMd: {},
        bodySm: {},
        labelLg: {},
        labelMd: {},
        labelSm: {},
      },
    },
    lg: {
      width: 1024,
      typography: {
        headlineLg: {},
        headlineMd: {},
        headlineStd: {},
        headlineSm: {},
        titleLg: {},
        titleMd: {},
        titleSm: {},
        bodyLg: {},
        bodyMd: {},
        bodySm: {},
        labelLg: {},
        labelMd: {},
        labelSm: {},
      },
    },
    xl: {
      width: 1200,
      typography: {
        headlineLg: {},
        headlineMd: {},
        headlineStd: {},
        headlineSm: {},
        titleLg: {},
        titleMd: {},
        titleSm: {},
        bodyLg: {},
        bodyMd: {},
        bodySm: {},
        labelLg: {},
        labelMd: {},
        labelSm: {},
      },
    },
  },
  typography: {
    headlineLg: {
      fontSize: '2.875rem',
      lineHeight: '3.25rem',
    },
    headlineMd: {
      fontSize: '1.75rem',
      lineHeight: '2.25rem',
    },
    headlineStd: {
      fontSize: '2rem',
      lineHeight: '2.5rem',
    },
    headlineSm: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
    },
    titleLg: {
      fontSize: '1.375rem',
      lineHeight: '1.75rem',
    },
    titleMd: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    titleSm: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
    bodyLg: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    bodyMd: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
    bodySm: {
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
    labelLg: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
    labelMd: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
    labelSm: {
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
  },
  palette: {
    background: {
      primary: 'rgba(255, 255, 255, 1)',
      secondary: 'rgba(0, 0, 0, 1)',
    },
    border: {
      primary: 'rgba(51, 51, 56, 1)',
      secondary: 'rgba(255, 255, 255, 1)',
      tertiary: 'rgba(223, 223, 226, 1)',
    },
    surface: {
      primary: 'rgba(0, 0, 0, 1)',
      secondary: 'rgba(0, 0, 0, 0.34)',
      tertiary: 'rgba(0, 0, 0, 0.2)',
      disabled: 'rgba(168, 168, 168, 1)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 1)',
      secondary: 'rgba(0, 0, 0, 0.34)',
      placeholder: 'rgba(0, 0, 0, 0.34)',
      disabled: 'rgba(0, 0, 0, 0.34)',
    },
    icons: {
      primary: 'rgba(0, 0, 0, 1)',
      disabled: 'rgba(0, 0, 0, 0.34)',
    },
  },
  globalStyles: css``,
}

defaultTheme.globalStyles = createThemeGlobalStyles(defaultTheme)
