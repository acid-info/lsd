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

export const Root: Story<CardBodyProps> = (args) => (
  <div style={{ width: 'fit-content' }}>
    <CardBody {...args}>
      A wise man can learn more from a foolish question than a fool can learn
      from a wise answer.
    </CardBody>
  </div>
)

Root.args = {
  size: 'large',
}
