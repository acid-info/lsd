import type { Preview } from '@storybook/react'
import { THEME_TYPOGRAPHY_FONT_CATEGORIES } from '../src/components/Theme/constants'
import { storybookThemes } from './themes'
import { withTheme } from './withTheme.decorator'

const preview: Preview = {
  parameters: {
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
  },
  decorators: [withTheme],
  argTypes: {
    genericFontFamily: {
      type: {
        name: 'enum',
        value: THEME_TYPOGRAPHY_FONT_CATEGORIES,
      },
      defaultValue: 'inherit',
    },
  },
  globalTypes: {
    ...storybookThemes.globalTypes,
  },
}

export default preview
