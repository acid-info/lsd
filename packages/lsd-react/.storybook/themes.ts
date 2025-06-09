import { Parameters, StoryContext } from '@storybook/react'
import { create } from '@storybook/theming/create'
import { GlobalTypes } from '@storybook/types'
import { CreateThemeProps, createTheme, defaultThemes } from '../src'
import { THEME_TYPOGRAPHY_FONT_CATEGORIES } from '../src/components/Theme/constants'

const themeProps: CreateThemeProps = {
  typography: {},
  breakpoints: {},
  palette: {},
  typographyGlobal: {},
  spacing: [],
}

const createThemes = () => {
  const fonts = THEME_TYPOGRAPHY_FONT_CATEGORIES.slice(1)

  const themes = fonts.map((font) => [
    createTheme(
      {
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

const darkTheme = defaultThemes.dark
export const docTheme = create({
  base: 'dark',
  fontBase: darkTheme.typographyGlobal.genericFontFamily,
  fontCode: darkTheme.typographyGlobal.genericFontFamily,
  colorPrimary: `rgb(${darkTheme.palette.primary})`,
  colorSecondary: `rgb(${darkTheme.palette.secondary})`,
  appBg: `rgb(${darkTheme.palette.surface.primary})`,
  appContentBg: `rgb(${darkTheme.palette.surface.primary})`,
  appBorderColor: `rgb(${darkTheme.palette.border.primary})`,
  appBorderRadius: 0,
  textColor: `rgb(${darkTheme.palette.text.primary})`,
  textInverseColor: `rgb(${darkTheme.palette.text.secondary})`,
  barTextColor: `rgb(${darkTheme.palette.text.primary})`,
  barSelectedColor: `rgb(${darkTheme.palette.text.primary})`,
  barBg: `rgb(${darkTheme.palette.surface.primary})`,
  inputBg: `rgb(${darkTheme.palette.surface.secondary})`,
  inputBorder: `rgb(${darkTheme.palette.border.primary})`,
  inputTextColor: `rgb(${darkTheme.palette.text.secondary})`,
  inputBorderRadius: 0,
  booleanBg: `rgb(${darkTheme.palette.surface.primary})`,
  booleanSelectedBg: `rgb(${darkTheme.palette.surface.primary})`,
  buttonBorder: `rgb(${darkTheme.palette.border.primary})`,
  buttonBg: `rgb(${darkTheme.palette.surface.secondary})`,
  textMutedColor: `rgb(${darkTheme.palette.text.primary})`,
})
