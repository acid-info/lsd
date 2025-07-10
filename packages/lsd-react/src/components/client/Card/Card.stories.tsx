import { Meta, StoryObj } from '@storybook/react'
import { CardBody } from '../CardBody'
import { CardHeader } from '../CardHeader'
import { Card, CardProps } from './Card'

const subtitle = `Surface`
const description = `Card is a flexible component designed to group and present content about a single subject in a clear and concise format, often including associated actions.`

export default {
  title: 'Card',
  component: Card,
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

export const Root: StoryObj<
  CardProps & {
    body: string
    title: string
  }
> = {
  render: ({ title, body, ...args }) => (
    <div style={{ width: 400 }}>
      <Card {...args}>
        <CardHeader>{title}</CardHeader>
        <CardBody>{body}</CardBody>
      </Card>
    </div>
  ),

  args: {
    size: 'large',
    title: 'Title',
    body: 'A wise man can learn more from a foolish question than a fool can learn from a wise answer.',
  },
}
