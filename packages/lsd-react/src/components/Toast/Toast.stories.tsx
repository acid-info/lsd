import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import { Toast, ToastProps } from './Toast'
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
} as Meta

export const Root: Story<ToastProps> = ({ buttonText, ...args }) => {
  const [isVisible, setIsVisible] = useState(args.isOpen)

  return (
    <div style={{ width: 400, position: 'relative' }}>
      <Button onClick={() => setIsVisible(!isVisible)}>Show Toast</Button>
      <Toast
        {...args}
        isOpen={isVisible}
        onClose={() => setIsVisible(false)}
        buttonText={buttonText}
        onButtonClick={() => alert('Button clicked!')}
      />
    </div>
  )
}

Root.args = {
  title: 'Toast Title',
  information: '',
  size: 'large',
  buttonText: 'Click me',
  isOpen: false,
  inline: true,
}
