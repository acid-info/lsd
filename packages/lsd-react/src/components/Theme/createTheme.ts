import { css } from '@emotion/react'
import defaultsDeep from 'lodash/defaultsDeep'
import { pairs } from '../../utils/object.utils'
import { THEME_BREAKPOINTS, THEME_TYPOGRAPHY_VARIANTS } from './constants'
import { defaultTheme } from './defaultTheme'
import { createThemeGlobalStyles } from './globalStyles'
import type {
  BreakpointStyles,
  CreateThemeProps,
  Theme,
  ThemeBreakpoints,
  TypographyVariants,
  VariantThemeProperties,
} from './types'

const createTypographyStyles = (theme: CreateThemeProps, defaultTheme: Theme) =>
  pairs<TypographyVariants>(THEME_TYPOGRAPHY_VARIANTS, (variant) => ({
    ...defaultTheme.typography[variant],
    ...(theme.typography[variant] ?? {}),
  }))

const createBreakpointStyle = (
  key: VariantThemeProperties,
  all: BreakpointStyles[],
  index: number,
  theme: CreateThemeProps,
  defaultTheme: Theme,
) => {
  switch (key) {
    case 'typography':
      return pairs<TypographyVariants>(defaultTheme[key], (variant) => ({
        ...defaultTheme[key][variant],
        ...theme[key][variant],
        ...(all?.[index - 1]?.[key]?.[variant] ?? {}),
        ...(theme.breakpoints?.[THEME_BREAKPOINTS[index]]?.[key]?.[variant] ??
          {}),
      }))

    default:
      return {}
  }
}

const createBreakpointStyles = (
  theme: CreateThemeProps,
  defaultTheme: Theme,
): Theme['breakpoints'] =>
  Object.fromEntries(
    THEME_BREAKPOINTS.reduce<BreakpointStyles[]>(
      (all, key, index) =>
        [
          ...all,
          {
            ...defaultTheme.breakpoints[key],
            ...theme.breakpoints[key],
            ...pairs(['typography'], (key) =>
              createBreakpointStyle(
                key as any,
                all,
                index,
                theme,
                defaultTheme,
              ),
            ),
          },
        ] as BreakpointStyles[],
      [],
    ).map((styles, index) => [THEME_BREAKPOINTS[index], styles]),
  ) as ThemeBreakpoints

const createPaletteStyles = (theme: CreateThemeProps, defaultTheme: Theme) =>
  defaultsDeep(theme.palette, defaultTheme.palette)

export const createTheme = (
  props: CreateThemeProps,
  from = defaultTheme,
): Theme => {
  const theme: Theme = {
    typography: createTypographyStyles(props, from),
    breakpoints: createBreakpointStyles(props, from),
    palette: createPaletteStyles(props, from),
    globalStyles: css``,
  }

  theme.globalStyles = createThemeGlobalStyles(theme)

  return theme
}
