import { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Button',
  component: Button,
} as Meta

export const Root: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
)
Root.args = {
  disabled: false,
}
