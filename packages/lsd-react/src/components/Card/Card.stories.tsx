import { Meta, Story } from '@storybook/react'
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

export const Root: Story<CardProps> = (args) => (
  <div style={{ width: 'fit-content' }}>
    <Card {...args}></Card>
  </div>
)

Root.args = {
  size: 'large',
  label: 'Title',
  text: 'A wise man can learn more from a foolish question than a fool can learn from a wise answer.',
  withHeader: false,
}
