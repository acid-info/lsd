import { Meta, StoryObj } from '@storybook/react'
import { Typography as TypographyComponent } from '../Typography'
import { ColorDesignTokens } from '../../docs/components/DesignTokens'

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
  // component: ThemeProvider,
} as Meta

// export const Root: StoryObj<ThemeProviderProps> = {
export const Root: StoryObj<any> = {
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
        {/* <SpacingDesignTokens /> */}

        <TypographyComponent variant="h6" component="h2">
          TypographyComponent
        </TypographyComponent>
        {/* <TypographyDesignTokens /> */}
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

export const Colors: StoryObj<any> = {
  render: (args) => {
    // return <ColorDesignTokens />
    return <div />
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

// export const Spacing: StoryObj<ThemeProviderProps> = {
export const Spacing: StoryObj<any> = {
  render: (args) => {
    // return <SpacingDesignTokens />
    return <div />
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

// export const Typography: StoryObj<ThemeProviderProps> = {
export const Typography: StoryObj<any> = {
  render: (args) => {
    // return <TypographyDesignTokens />
    return <div />
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
