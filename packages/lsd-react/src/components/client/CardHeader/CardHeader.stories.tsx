import { Meta, StoryObj } from '@storybook/react'
import { CardHeader, CardHeaderProps } from './CardHeader'

const subtitle = ``
const description = ``

export default {
  title: 'CardHeader',
  component: CardHeader,
  parameters: {
    componentSubtitle: subtitle,
    docs: {
      description: {
        component: description,
      },
    },
  },
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta

export const Root: StoryObj<CardHeaderProps & { title: string }> = {
  render: ({ title, ...args }) => (
    <div style={{ width: 400 }}>
      <CardHeader {...args}>{title}</CardHeader>
    </div>
  ),

  args: {
    size: 'large',
    title: 'Title',
  },
}
