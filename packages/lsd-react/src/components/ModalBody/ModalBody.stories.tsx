import { Meta, Story } from '@storybook/react'
import { ModalBody, ModalBodyProps } from './ModalBody'

export default {
  title: 'ModalBody',
  component: ModalBody,
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
} as Meta

export const Root: Story<
  ModalBodyProps & {
    content: string
  }
> = ({ content, ...args }) => {
  const bodyStyle: React.CSSProperties = {
    boxSizing: 'border-box',
    border: '1px solid rgb(var(--lsd-border-primary)',
    padding: '30px',
  }

  return (
    <ModalBody {...args} style={bodyStyle}>
      {content}
    </ModalBody>
  )
}

Root.args = {
  content:
    'A wise man can learn more from a foolish question than a fool can learn from a wise answer.',
}
