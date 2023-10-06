import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { CardBody } from '../CardBody'
import { CardHeader } from '../CardHeader'
import { Card, CardProps } from './Card'

export default {
  title: 'Card',
  component: Card,
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
