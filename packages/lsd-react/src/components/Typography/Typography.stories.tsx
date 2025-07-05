import { Meta, StoryObj } from '@storybook/react'
import { THEME_TYPOGRAPHY_VARIANTS } from '../../theme'
import { Typography, TypographyProps } from './Typography'

const subtitle = `Data Display`
const description = `Typography component lets you apply LSD typography styles of a specific variant to the elements in your app.`

export default {
  title: 'Typography',
  component: Typography,
  parameters: {
    componentSubtitle: subtitle,
    docs: {
      description: {
        component: description,
      },
    },
  },
  argTypes: {
    variant: {
      type: {
        name: 'enum',
        value: THEME_TYPOGRAPHY_VARIANTS,
      },
      defaultValue: 'body1',
    },
    color: {
      type: {
        name: 'enum',
        value: ['primary', 'secondary'],
        required: false,
      },
    },
  },
} as Meta

export const Root: StoryObj<TypographyProps> = {
  render: (args) => <Typography {...args}>Text</Typography>,

  args: {
    color: 'primary',
    variant: 'body1',
  },
}
