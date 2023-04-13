import { DecoratorFunction, Parameters } from '@storybook/addons'
import { ArgTypes } from '@storybook/react'
import { THEME_TYPOGRAPHY_FONT_CATEGORIES } from '../src/components/Theme/constants'
import { storybookThemes } from './themes'
import { GlobalTypes } from './types'
import { withTheme } from './withTheme.decorator'

export const parameters: Parameters = {
  ...storybookThemes.parameters,
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...Object.fromEntries(
        Object.entries(storybookThemes.defaultTheme.breakpoints).map(
          ([key, { width }]) => [
            key,
            {
              name: key,
              styles: {
                width: (width > 0 ? width : 360) + 'px',
                height: 'auto',
                minHeight: 400,
              },
            },
          ],
        ),
      ),
    },
  },
}

export const decorators: DecoratorFunction[] = [withTheme]

export const argTypes: ArgTypes = {
  genericFontFamily: {
    type: {
      name: 'enum',
      value: THEME_TYPOGRAPHY_FONT_CATEGORIES,
    },
    defaultValue: 'inherit',
  },
}

export const globalTypes: GlobalTypes = {
  ...storybookThemes.globalTypes,
}
