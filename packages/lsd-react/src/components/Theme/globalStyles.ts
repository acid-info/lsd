import { css } from '@emotion/react'
import {
  LSD_NAMESPACE,
  THEME_BREAKPOINTS,
  THEME_TYPOGRAPHY_PROPERTIES,
  THEME_TYPOGRAPHY_VARIANTS,
} from './constants'
import { Breakpoints, Theme, TypographyVariants } from './types'

export const gs = {
  breakpoint: (
    theme: Theme,
    breakpoint: Breakpoints,
    content: string,
  ) => `@media (min-width: ${theme.breakpoints[breakpoint].width}px) {
    ${content}
  }`,

  vars: {
    name: (...parts: string[]) => `--${[LSD_NAMESPACE, ...parts].join('-')}`,
    wrap: (v: string, wrap = true) => (!wrap ? v : `var(${v})`),
    define: (name: string, value: any) => `${name}: ${value};`,
    typography: (
      variant: TypographyVariants,
      property: string,
      breakpoint?: Breakpoints | 'default',
    ) => gs.vars.name(variant, property, ...(breakpoint ? [breakpoint] : [])),
    palette: (category: string, variant: string) =>
      gs.vars.name(category, variant),
  },

  all: (theme: Theme) =>
    [gs.typography.all(theme), gs.palette.all(theme)].join('\n'),

  typography: {
    all: (theme: Theme) => [gs.typography.variants(theme)].join('\n'),

    variants: (theme: Theme) =>
      [
        ...THEME_TYPOGRAPHY_VARIANTS.flatMap((variant) =>
          THEME_TYPOGRAPHY_PROPERTIES.map((prop) =>
            gs.vars.define(
              gs.vars.typography(variant, prop),
              theme.typography[variant][prop],
            ),
          ),
        ),
        gs.typography.breakpoints(theme),
      ].join('\n'),

    breakpoints: (theme: Theme) =>
      THEME_BREAKPOINTS.map((breakpoint, index) =>
        gs.breakpoint(
          theme,
          breakpoint,
          gs.typography.breakpoint(theme, breakpoint, index),
        ),
      ).join('\n'),

    breakpoint: (
      theme: Theme,
      breakpoint: Breakpoints,
      breakpointIndex: number,
    ) =>
      THEME_TYPOGRAPHY_VARIANTS.flatMap((variant) =>
        THEME_TYPOGRAPHY_PROPERTIES.map((prop) => {
          const value = theme.breakpoints[breakpoint].typography[variant][prop]
          const current =
            breakpointIndex > 0
              ? theme.breakpoints?.[THEME_BREAKPOINTS[breakpointIndex - 1]]
                  ?.typography?.[variant]?.[prop]
              : theme.typography[variant][prop]

          return value !== current
            ? gs.vars.define(gs.vars.typography(variant, prop), value)
            : undefined
        }),
      )
        .filter((value) => !!value)
        .join('\n'),
  },

  palette: {
    all: (theme: Theme) => {
      const palette = theme.palette as Record<string, Record<string, string>>

      return [
        ...Object.keys(palette).flatMap((name) =>
          Object.keys(palette[name]).map((variant) =>
            gs.palette.color(name, variant, palette[name][variant]),
          ),
        ),

        `:root {
        html, body {
          background-color: ${theme.palette.background.primary};
        }
      }
      `,
      ].join('\n')
    },

    color: (name: string, variant: string, value: string) =>
      gs.vars.define(gs.vars.palette(name, variant), value),
  },
}

export const createThemeGlobalStyles = (() => {
  return (theme: Theme) => {
    const cache: any = {}
    const key = theme as any as string

    if (
      cache[key] &&
      process.env.NODE_ENV === 'production' &&
      typeof window !== 'undefined'
    )
      return cache[key]

    const styles = globalStyles.all(theme)
    cache[key] = css`
      :root {
        ${styles}
      }
    `

    return cache[key]
  }
})()

export const globalStyles = gs
