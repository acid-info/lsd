import { Meta, StoryObj } from '@storybook/react'
import {
  ColorDesignTokens,
  SpacingDesignTokens,
  TypographyDesignTokens,
} from '../../docs/components/DesignTokens'
import { Typography as TypographyComponent } from '../Typography'
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

export const Colors: StoryObj<ThemeProviderProps> = {
  render: (args) => {
    return <ColorDesignTokens />
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

export const Spacing: StoryObj<ThemeProviderProps> = {
  render: (args) => {
    return <SpacingDesignTokens />
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

export const Typography: StoryObj<ThemeProviderProps> = {
  render: (args) => {
    return <TypographyDesignTokens />
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
