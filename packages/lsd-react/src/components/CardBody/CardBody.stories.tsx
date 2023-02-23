import { Meta, Story } from '@storybook/react'
import { CardBody, CardBodyProps } from './CardBody'

export default {
  title: 'CardBody',
  component: CardBody,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta

export const Root: Story<CardBodyProps & { body: string }> = ({
  body,
  ...args
}) => (
  <div style={{ width: 400 }}>
    <CardBody {...args}>{body}</CardBody>
  </div>
)

Root.args = {
  body: 'A wise man can learn more from a foolish question than a fool can learn from a wise answer.',
}
