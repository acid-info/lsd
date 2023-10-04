import { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import { Modal, ModalProps } from './Modal'
import { Button } from '../Button'
import { ModalBody } from '../ModalBody'
import { ModalFooter } from '../ModalFooter'

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['xsmall', 'small', 'medium', 'large'],
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
  const slotStyles: React.CSSProperties = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid rgb(var(--lsd-border-primary)',
    padding: '30px',
  }

  return (
    <div style={{ width: 400 }}>
      <Button onClick={() => setIsOpen(!isOpen)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalBody>
          <div style={slotStyles}>{body}</div>
        </ModalBody>

        <ModalFooter>
          <Button
            size={args.size === 'xsmall' ? 'small' : args.size}
            style={{
              marginRight: 12,
            }}
          >
            Button 1
          </Button>
          <Button size={args.size === 'xsmall' ? 'small' : args.size}>
            Button 2
          </Button>
        </ModalFooter>
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
