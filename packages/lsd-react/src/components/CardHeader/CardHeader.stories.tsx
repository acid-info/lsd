import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { CardHeader, CardHeaderProps } from './CardHeader'

export default {
  title: 'CardHeader',
  component: CardHeader,
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
