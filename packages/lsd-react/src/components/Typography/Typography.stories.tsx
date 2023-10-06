import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { THEME_TYPOGRAPHY_VARIANTS } from '../Theme'
import { Typography, TypographyProps } from './Typography'

export default {
  title: 'Typography',
  component: Typography,
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
  },
}
