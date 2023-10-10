import { Meta, Story } from '@storybook/react'
import { Toast, ToastProps } from './Toast'

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
} as Meta

export const Root: Story<ToastProps> = (args) => {
  return <Toast {...args} />
}

Root.args = {
  title: 'Toast Title',
  information: '',
  size: 'large',
  buttonText: 'Click me',
  inline: true,
}
