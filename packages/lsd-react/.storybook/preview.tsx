import {
  Canvas,
  Controls,
  Description,
  Subtitle,
  Title,
  useOf,
} from '@storybook/blocks'
import type { Preview } from '@storybook/react'
import React from 'react'
import { THEME_TYPOGRAPHY_FONT_CATEGORIES } from '../src/components/Theme/constants'
import { docTheme, storybookThemes } from './themes'
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
    docs: {
      theme: docTheme,
      page: () => {
        const resolvedOf = useOf('meta', ['meta'])
        const { stories, meta, moduleExports } = resolvedOf.csfFile

        const controls =
          typeof meta?.parameters?.docs?.controls === 'undefined' ||
          meta?.parameters?.docs?.controls === true

        return (
          <>
            <Title />
            <Subtitle />
            <Description />
            <Canvas sourceState="shown" />
            {controls && <Controls />}
          </>
        )
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
