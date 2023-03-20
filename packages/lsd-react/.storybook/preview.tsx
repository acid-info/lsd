import { DecoratorFunction, Parameters } from '@storybook/addons'
import {
  storybookDefaultTheme,
  storybookDefaultThemeKey,
  themes,
} from './themes'
import { withTheme } from './withTheme.decorator'

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: Object.entries(themes).map(([name, theme]) => ({
      name,
      value: `rgb(${theme.palette.secondary})`,
    })),
  },
  viewport: {
    viewports: {
      ...Object.fromEntries(
        Object.entries(storybookDefaultTheme.breakpoints).map(
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

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Theme',
    defaultValue: storybookDefaultThemeKey,
    toolbar: {
      icon: 'circlehollow',
      items: Object.entries(themes).map(([name, theme]) => ({
        value: name,
        icon: name.startsWith('Light') ? 'circlehollow' : 'circle',
        title: name,
      })),
    },
  },
}
