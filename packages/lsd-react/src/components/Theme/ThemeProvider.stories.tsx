import { Meta, StoryObj } from '@storybook/react'
import {
  ColorDesignTokens,
  SpacingDesignTokens,
  TypographyDesignTokens,
} from '../../docs/components/DesignTokens'
import { Typography } from '../Typography'
import { ThemeProvider, ThemeProviderProps } from './ThemeProvider'

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
  component: ThemeProvider,
} as Meta

export const Root: StoryObj<ThemeProviderProps> = {
  render: (args) => {
    return (
      <div>
        <Typography variant="h6" component="h2">
          Colour
        </Typography>
        <ColorDesignTokens />
        <Typography variant="h6" component="h2">
          Spacing
        </Typography>
        <SpacingDesignTokens />

        <Typography variant="h6" component="h2">
          Typography
        </Typography>
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
