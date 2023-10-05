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
    position: {
      type: {
        name: 'enum',
        value: [
          'top-left',
          'top',
          'top-right',
          'bottom-left',
          'bottom',
          'bottom-right',
        ],
      },
    },
    animation: {
      type: {
        name: 'enum',
        value: ['auto', 'moveDown', 'moveUp'],
      },
    },
  },
} as Meta

export const Root: Story<ToastProps> = ({ buttonText, ...args }) => {
  const [isVisible, setIsVisible] = useState(args.isOpen)

  // When the "Show toast" button is clicked, close the toast and then open it again.
  const handleClick = () => {
    setIsVisible(false)

    setTimeout(() => {
      setIsVisible(true)
    }, 200)
  }

  return (
    <div style={{ width: 400, position: 'relative' }}>
      <Button onClick={handleClick}>Show Toast</Button>
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
  xOffset: 20,
  yOffset: 20,
  buttonText: 'Click me',
  animation: 'auto',
  position: 'top',
  isOpen: false,
  inline: true,
  openTimeMilliseconds: 0,
}
