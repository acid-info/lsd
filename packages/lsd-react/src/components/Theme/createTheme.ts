import { css } from '@emotion/react'
import { pairs } from '../../utils/object.utils'
import { baseTheme } from './baseTheme'
import { THEME_BREAKPOINTS, THEME_TYPOGRAPHY_VARIANTS } from './constants'
import { createThemeGlobalStyles } from './globalStyles'
import type {
  BreakpointStyles,
  CreateThemeProps,
  Theme,
  ThemeBreakpoints,
  ThemePalette,
  TypographyVariants,
  VariantThemeProperties,
} from './types'

const createTypographyStyles = (theme: CreateThemeProps, defaultTheme: Theme) =>
  pairs<TypographyVariants>(THEME_TYPOGRAPHY_VARIANTS, (variant) => ({
    ...defaultTheme.typographyGlobal,
    ...theme.typographyGlobal,
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
        ...(defaultTheme.breakpoints?.[THEME_BREAKPOINTS[index]]?.[key]?.[
          variant
        ] ?? {}),
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

const createPaletteStyles = (theme: CreateThemeProps, defaultTheme: Theme) => {
  const primary = theme.palette.primary ?? defaultTheme.palette.primary
  const secondary = theme.palette.secondary ?? defaultTheme.palette.secondary

  const palette: ThemePalette = {
    primary,
    secondary,
    surface: {
      primary: theme.palette.surface?.primary ?? secondary,
      secondary: theme.palette.surface?.secondary ?? primary,
    },
    border: {
      primary: theme.palette.border?.primary ?? primary,
      secondary: theme.palette.border?.secondary ?? secondary,
    },
    icon: {
      primary: theme.palette.icon?.primary ?? primary,
      secondary: theme.palette.icon?.secondary ?? secondary,
    },
    text: {
      primary: theme.palette.text?.primary ?? primary,
      secondary: theme.palette.text?.secondary ?? secondary,
      tertiary: theme.palette.text?.tertiary ?? `${primary}, 0.34`,
    },
  }

  return palette
}

export const createTheme = (
  props: CreateThemeProps,
  from = baseTheme,
): Theme => {
  const theme: Theme = {
    name: props.name ?? from.name,
    typography: createTypographyStyles(props, from),
    typographyGlobal: { ...from.typographyGlobal, ...props.typographyGlobal },
    breakpoints: createBreakpointStyles(props, from),
    palette: createPaletteStyles(props, from),
    globalStyles: css``,
  }

  theme.globalStyles = createThemeGlobalStyles(theme)

  return theme
}
