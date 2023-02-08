import { DecoratorFunction, Parameters } from '@storybook/addons'
import { defaultThemes } from '../src'
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
    values: Object.entries(defaultThemes).map(([name, theme]) => ({
      name,
      value: theme.palette.background.primary,
    })),
  },
  viewport: {
    viewports: {
      ...Object.fromEntries(
        Object.entries(defaultThemes.light.breakpoints).map(
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
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
      ],
    },
  },
}
