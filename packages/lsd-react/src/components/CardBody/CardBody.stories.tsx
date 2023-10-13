import { Meta, StoryObj } from '@storybook/react'
import { CardBody, CardBodyProps } from './CardBody'

const subtitle = ``
const description = ``

export default {
  title: 'CardBody',
  component: CardBody,
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
        value: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta

export const Root: StoryObj<CardBodyProps & { body: string }> = {
  render: ({ body, ...args }) => (
    <div style={{ width: 400 }}>
      <CardBody {...args}>{body}</CardBody>
    </div>
  ),

  args: {
    body: 'A wise man can learn more from a foolish question than a fool can learn from a wise answer.',
  },
}
