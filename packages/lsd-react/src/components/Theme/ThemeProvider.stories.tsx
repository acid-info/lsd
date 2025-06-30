import { Meta } from '@storybook/react'
import { Typography as TypographyComponent } from '../Typography'
import {
  ColorDesignTokens,
  SpacingDesignTokens,
  TypographyDesignTokens,
} from '../../docs/components/DesignTokens'

const subtitle = ``
const description = ``

export default {
  title: 'ThemeProvider',
  parameters: {
    componentSubtitle: subtitle,
    docs: {
      controls: false,
      description: {
        component: description,
      },
    },
  },
} as Meta

export const Root = {
  render: () => {
    return (
      <div>
        <TypographyComponent variant="h6" component="h2">
          Colour
        </TypographyComponent>
        <ColorDesignTokens />
        <TypographyComponent variant="h6" component="h2">
          Spacing
        </TypographyComponent>
        <SpacingDesignTokens />

        <TypographyComponent variant="h6" component="h2">
          TypographyComponent
        </TypographyComponent>
        <TypographyDesignTokens />
      </div>
    )
  },
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },

  args: {},
}
