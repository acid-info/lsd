import { Meta, Story } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
} as Meta

export const Root: Story = (args) => <Button {...args}>Button</Button>
