import { css } from '@emotion/react'
import {
  THEME_BREAKPOINTS,
  THEME_TYPOGRAPHY_PROPERTIES,
  THEME_TYPOGRAPHY_VARIANTS,
} from './constants'
import { Theme, TypographyProperties, TypographyVariants } from './types'
import { withTheme } from './withTheme'

const cssUtils = {
  vars: {
    lsd: (...seq: string[]) => `--${['lsd', ...seq].join('-')}`,
    typography: (
      variant: TypographyVariants | string,
      property: TypographyProperties | string,
    ) => cssUtils.vars.lsd(variant, property),
    color: (category: string, variant: string) =>
      cssUtils.vars.lsd(category, variant),
    wrap: (name: string) => `var(${name})`,
  },

  define: (name: string, value: string) => `${name}: ${value};`,
}

const generateThemeGlobalStyles = withTheme((theme) => {
  const vars: Array<string | string[]> = []
  const styles: Array<string | string[]> = []
  const breakpointStyles: string[][] = THEME_BREAKPOINTS.map(() => [])
  const breakpointVars: string[][] = THEME_BREAKPOINTS.map(() => [])

  {
    THEME_TYPOGRAPHY_VARIANTS.forEach((variant) => {
      THEME_TYPOGRAPHY_PROPERTIES.forEach((property) => {
        const value = theme.typography[variant][property]?.toString() ?? 'unset'
        vars.push(
          cssUtils.define(cssUtils.vars.typography(variant, property), value),
        )
      })
    })

    vars.push(
      cssUtils.define(
        cssUtils.vars.lsd('typography', 'generic-font-family'),
        theme.typographyGlobal.genericFontFamily,
      ),
    )

    THEME_BREAKPOINTS.forEach((breakpoint, breakpointIndex) => {
      THEME_TYPOGRAPHY_VARIANTS.forEach((variant) => {
        THEME_TYPOGRAPHY_PROPERTIES.forEach((property) => {
          const value =
            theme.breakpoints[breakpoint].typography[variant][property]

          const current =
            breakpointIndex > 0
              ? theme.breakpoints?.[THEME_BREAKPOINTS[breakpointIndex - 1]]
                  ?.typography?.[variant]?.[property]
              : theme.typography[variant][property]

          if (value && value !== current) {
            breakpointVars[breakpointIndex].push(
              cssUtils.define(
                cssUtils.vars.typography(variant, property),
                value.toString(),
              ),
            )
          }
        })
      })
    })
  }

  {
    const { primary, secondary, ...rest } = theme.palette
    const palette = rest as Record<string, Record<string, string>>

    vars.push(
      cssUtils.define(cssUtils.vars.color('theme', 'primary'), primary),
      cssUtils.define(cssUtils.vars.color('theme', 'secondary'), secondary),
      ...Object.keys(palette).flatMap((name) =>
        Object.keys(palette[name]).map((variant) =>
          cssUtils.define(
            cssUtils.vars.color(name, variant),
            palette[name][variant],
          ),
        ),
      ),
    )
  }

  THEME_BREAKPOINTS.map((breakpoint, index) => {
    styles.push(`@media (min-width: ${theme.breakpoints[breakpoint].width}px) {
      :root {
        ${breakpointVars[index].join('\n')}
      }

      ${breakpointStyles[index]}
    }`)
  })

  return css`
    :root {
      ${vars.join('\n')}
    }

    ${styles.join('\n')}
  `
})

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

    cache[key] = generateThemeGlobalStyles(theme)

    return cache[key]
  }
})()
