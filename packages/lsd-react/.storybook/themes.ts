import { Parameters, StoryContext } from '@storybook/react'
import { create } from '@storybook/theming/create'
import { GlobalTypes } from '@storybook/types'
import { CreateThemeProps, createTheme, defaultThemes } from '../src'
import { THEME_TYPOGRAPHY_FONT_CATEGORIES } from '../src/theme/constants'

const themeProps: CreateThemeProps = {
  typography: {},
  breakpoints: {},
  palette: {},
  typographyGlobal: {},
  spacing: [],
}

const createThemes = () => {
  const fonts = THEME_TYPOGRAPHY_FONT_CATEGORIES

  const themes = fonts.map((font) => [
    createTheme(
      {
        name: defaultThemes.light.name,
        ...themeProps,
        typographyGlobal: {
          genericFontFamily: font,
        },
      },
      defaultThemes.light,
    ),
    createTheme(
      {
        name: defaultThemes.dark.name,
        ...themeProps,
        typographyGlobal: {
          genericFontFamily: font,
        },
      },
      defaultThemes.dark,
    ),
  ])

  const getTheme = (context: StoryContext) => {
    const themeColor = context.globals?.themeColor ?? defaultThemes.light.name
    const themeFont = context.globals?.themeFont ?? fonts[0]

    return themes[fonts.findIndex((font) => font === themeFont)][
      themeColor === defaultThemes.light.name ? 0 : 1
    ]
  }

  return {
    getTheme,
    defaultTheme: themes[0][0],
    parameters: {
      backgrounds: {
        default: defaultThemes.light.name,
        values: [
          {
            name: defaultThemes.light.name,
            value: `rgb(${defaultThemes.light.palette.secondary})`,
          },

          {
            name: defaultThemes.dark.name,
            value: `rgb(${defaultThemes.dark.palette.secondary})`,
          },
        ],
      },
    } as Parameters,
    globalTypes: {
      themeColor: {
        name: 'Theme Color',
        description: 'Theme Color',
        defaultValue: 'light',
        toolbar: {
          title: ' Theme Color',
          icon: 'circlehollow',
          items: [
            {
              title: 'Light',
              value: defaultThemes.light.name,
              icon: 'circlehollow',
            },
            {
              title: 'Dark',
              value: defaultThemes.dark.name,
              icon: 'circle',
            },
          ],
        },
      },
      themeFont: {
        name: 'Theme Font',
        description: 'Theme Font',
        defaultValue: THEME_TYPOGRAPHY_FONT_CATEGORIES[0],
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

const lightTheme = defaultThemes.light
export const docTheme = create({
  base: 'light',
  fontBase: lightTheme.typographyGlobal.genericFontFamily,
  fontCode: lightTheme.typographyGlobal.genericFontFamily,
  colorPrimary: `rgb(${lightTheme.palette.primary})`,
  colorSecondary: `rgb(${lightTheme.palette.secondary})`,
  appBg: `rgb(${lightTheme.palette.surface.primary})`,
  appContentBg: `rgb(${lightTheme.palette.surface.primary})`,
  appBorderColor: `rgb(${lightTheme.palette.border.primary})`,
  appBorderRadius: 0,
  textColor: `rgb(${lightTheme.palette.text.primary})`,
  textInverseColor: `rgb(${lightTheme.palette.text.secondary})`,
  barTextColor: `rgb(${lightTheme.palette.text.primary})`,
  barSelectedColor: `rgb(${lightTheme.palette.text.primary})`,
  barBg: `rgb(${lightTheme.palette.surface.primary})`,
  inputBg: `rgb(${lightTheme.palette.surface.secondary})`,
  inputBorder: `rgb(${lightTheme.palette.border.primary})`,
  inputTextColor: `rgb(${lightTheme.palette.text.secondary})`,
  inputBorderRadius: 0,
  booleanBg: `rgb(${lightTheme.palette.surface.primary})`,
  booleanSelectedBg: `rgb(${lightTheme.palette.surface.primary})`,
  buttonBorder: `rgb(${lightTheme.palette.border.primary})`,
  buttonBg: `rgb(${lightTheme.palette.surface.secondary})`,
  textMutedColor: `rgb(${lightTheme.palette.text.primary})`,
})
