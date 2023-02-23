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

export const Root: Story<CardHeaderProps> = (args) => (
  <div style={{ width: 'fit-content' }}>
    <CardHeader {...args}>Title</CardHeader>
  </div>
)

Root.args = {
  size: 'large',
}
