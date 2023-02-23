import { Meta, Story } from '@storybook/react'
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

export const Root: Story<CardHeaderProps & { title: string }> = ({
  title,
  ...args
}) => (
  <div style={{ width: 400 }}>
    <CardHeader {...args}>{title}</CardHeader>
  </div>
)

Root.args = {
  size: 'large',
  title: 'Title',
}
