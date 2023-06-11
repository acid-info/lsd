import { Parameters } from '@storybook/addons'
import { StoryContext } from '@storybook/react'
import { createTheme, CreateThemeProps, defaultThemes } from '../src'
import { THEME_TYPOGRAPHY_FONT_CATEGORIES } from '../src/components/Theme/constants'
import { GlobalTypes } from './types'

const themeProps: CreateThemeProps = {
  typography: {},
  breakpoints: {},
  palette: {},
  typographyGlobal: {},
}

const createThemes = () => {
  const fonts = THEME_TYPOGRAPHY_FONT_CATEGORIES.slice(1)

  const themes = fonts.map((font) => [
    createTheme(
      {
        // name: `${defaultThemes.light.name} (${font})`,
        ...themeProps,
        typographyGlobal: {
          genericFontFamily: font,
        },
      },
      defaultThemes.light,
    ),
    createTheme(
      {
        name: `${defaultThemes.dark.name} (${font})`,
        ...themeProps,
        typographyGlobal: {
          genericFontFamily: font,
        },
      },
      defaultThemes.dark,
    ),
  ])

  const getTheme = (context: StoryContext) => {
    const themeColor = context.globals?.themeColor ?? 'Light'
    const themeFont = context.globals?.themeFont ?? fonts[0]

    return themes[fonts.findIndex((font) => font === themeFont)][
      themeColor === 'Light' ? 0 : 1
    ]
  }

  return {
    getTheme,
    defaultTheme: themes[0][0],
    parameters: {
      backgrounds: {
        default: 'Light',
        values: [
          {
            name: 'Light',
            value: `rgb(${defaultThemes.light.palette.secondary})`,
          },

          {
            name: 'Dark',
            value: `rgb(${defaultThemes.dark.palette.secondary})`,
          },
        ],
      },
    } as Parameters,
    globalTypes: {
      themeColor: {
        name: 'Theme Color',
        description: 'Theme Color',
        defaultValue: 'Light',
        toolbar: {
          title: ' Theme Color',
          icon: 'circlehollow',
          items: [
            {
              title: 'Light',
              value: 'Light',
              icon: 'circlehollow',
            },
            {
              title: 'Dark',
              value: 'Dark',
              icon: 'circle',
            },
          ],
        },
      },
      themeFont: {
        name: 'Theme Font',
        description: 'Theme Font',
        defaultValue: THEME_TYPOGRAPHY_FONT_CATEGORIES[1],
        toolbar: {
          title: ' Theme Font',
          items: fonts.map((font) => ({
            title: font,
            value: font,
          })),
        },
      },
    } as GlobalTypes,
  }
}

export const storybookThemes = createThemes()
