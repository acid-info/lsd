import { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { ModalFooter, ModalFooterProps } from './ModalFooter'

const subtitle = ``
const description = ``

export default {
  title: 'ModalFooter',
  component: ModalFooter,
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
  },
} as Meta

export const Root: StoryObj<
  ModalFooterProps & {
    size: 'xsmall' | 'small' | 'medium' | 'large'
  }
> = {
  render: ({ size, ...args }) => {
    const footerStyle: React.CSSProperties = {
      boxSizing: 'border-box',
      border: '1px solid rgb(var(--lsd-border-primary)',
      padding: '30px',
    }

    return (
      <ModalFooter {...args} style={footerStyle}>
        <ModalFooter>
          <Button
            size={size === 'xsmall' ? 'small' : size}
            style={{
              marginRight: 12,
            }}
          >
            Button 1
          </Button>
          <Button size={size === 'xsmall' ? 'small' : size}>Button 2</Button>
        </ModalFooter>
      </ModalFooter>
    )
  },

  args: {
    size: 'large',
  },
}
