import { createTheme, CreateThemeProps, defaultThemes } from '../src'

const themeProps: CreateThemeProps = {
  typography: {
    body3: {
      fontFamily: 'sans-serif',
    },
  },
  breakpoints: {},
  palette: {},
  typographyGlobal: {},
}

const typefaceTypes: Record<string, CreateThemeProps['typographyGlobal']> = {
  'sans-serif': {
    fontFamily: 'Helvetica, sans-serif',
  },
  serif: {
    fontFamily: 'Georgia, serif',
  },
  monospace: {
    fontFamily: 'Courier, monospace',
  },
}

export const themesArray = Object.keys(defaultThemes).flatMap((key) =>
  Object.entries(typefaceTypes).map(([typeFace, typographyGlobal]) =>
    createTheme(
      {
        name: `${defaultThemes[key].name} (${typeFace})`,
        ...themeProps,
        typographyGlobal,
      },
      defaultThemes[key],
    ),
  ),
)

export const themes = Object.fromEntries(
  themesArray.map((theme) => [theme.name, theme]),
)

export const storybookDefaultThemeKey = themesArray[0].name
export const storybookDefaultTheme = themesArray[0]
