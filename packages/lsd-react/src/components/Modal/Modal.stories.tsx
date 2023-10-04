import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import { ModalBody } from '../ModalBody'
import { Modal, ModalProps } from './Modal'
import { Button } from '../Button'

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['extraSmall', 'small', 'medium', 'large'],
      },
    },
  },
} as Meta

export const Root: Story<
  ModalProps & {
    body: string
  }
> = ({ body, ...args }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ width: 400 }}>
      <Button onClick={() => setIsOpen(!isOpen)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalBody>{body}</ModalBody>
        <div style={{ display: 'flex' }}>
          <Button
            size={args.size === 'extraSmall' ? 'small' : args.size}
            style={{
              marginRight: 12,
            }}
          >
            Button 1
          </Button>
          <Button size={args.size === 'extraSmall' ? 'small' : args.size}>
            Button 2
          </Button>
        </div>
      </Modal>
    </div>
  )
}

Root.args = {
  size: 'large',
  title: 'Title',
  subtitle: 'Subtitle goes here',
  body: 'Content goes here.',
}
