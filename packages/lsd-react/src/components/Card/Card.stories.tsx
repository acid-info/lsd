import { Meta, Story } from '@storybook/react'
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

export const Root: Story<
  CardProps & {
    body: string
    title: string
  }
> = ({ title, body, ...args }) => (
  <div style={{ width: 400 }}>
    <Card {...args}>
      <CardHeader>{title}</CardHeader>
      <CardBody>{body}</CardBody>
    </Card>
  </div>
)

Root.args = {
  size: 'large',
  title: 'Title',
  body: 'A wise man can learn more from a foolish question than a fool can learn from a wise answer.',
}
