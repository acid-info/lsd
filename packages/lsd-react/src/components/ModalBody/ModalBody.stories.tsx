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
    body: string
    title: string
  }
> = ({ body, ...args }) => (
  <div style={{ width: 400 }}>
    <ModalBody {...args}>{body}</ModalBody>
  </div>
)

Root.args = {
  title: 'Title',
  body: 'A wise man can learn more from a foolish question than a fool can learn from a wise answer.',
}
