import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from './Toast'
import { Button } from '../Button'

export default {
  title: 'Toast',
  component: Toast,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta<typeof Toast>

type Story = StoryObj<typeof Toast>

export const Root: Story = {
  args: {
    title: 'Toast Title',
    information: '',
    size: 'large',
  },
  render: (args) => <Toast {...args} actions={<Button>Button</Button>} />,
}
