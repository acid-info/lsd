import { Meta, StoryObj } from '@storybook/react'
import { ModalBody, ModalBodyProps } from './ModalBody'

const subtitle = ``
const description = ``

export default {
  title: 'ModalBody',
  component: ModalBody,
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
      table: {
        disable: true,
      },
    },
  },
} as Meta

export const Root: StoryObj<
  ModalBodyProps & {
    content: string
  }
> = {
  render: ({ content, ...args }) => {
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
  },

  args: {
    content:
      'A wise man can learn more from a foolish question than a fool can learn from a wise answer.',
  },
}
