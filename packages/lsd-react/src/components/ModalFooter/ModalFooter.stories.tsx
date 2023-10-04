import { Meta, Story } from '@storybook/react'
import { ModalFooter, ModalFooterProps } from './ModalFooter'
import { Button } from '../Button'

export default {
  title: 'ModalFooter',
  component: ModalFooter,
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
  ModalFooterProps & {
    size: 'xsmall' | 'small' | 'medium' | 'large'
  }
> = ({ size, ...args }) => {
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
}

Root.args = {
  size: 'large',
}
