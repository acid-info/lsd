import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../Button'
import { ModalBody } from '../ModalBody'
import { ModalFooter } from '../ModalFooter'
import { Modal, ModalProps } from './Modal'

const subtitle = `Feedback`
const description = `A modal is a window positioned above the page content to direct the user's attention solely toward a single task or piece of information.`

export default {
  title: 'Modal',
  component: Modal,
  parameters: {
    componentSubtitle: subtitle,
    docs: {
      description: {
        component: description,
      },
    },
  },
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['xsmall', 'small', 'medium', 'large'],
      },
    },
    isOpen: {
      table: {
        disable: true,
      },
    },
  },
} as Meta

export const Root: StoryObj<
  ModalProps & {
    body: string
  }
> = {
  render: ({ body, ...args }) => {
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
  },

  args: {
    size: 'large',
    title: 'Title',
    subtitle: 'Subtitle goes here',
    body: 'Content goes here.',
  },
}
