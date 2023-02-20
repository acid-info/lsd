import { Meta, Story } from '@storybook/react'
import { CardItem, CardItemProps } from './Cardtem'

export default {
  title: 'CardItem',
  component: CardItem,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta

export const Root: Story<CardItemProps> = (args) => (
  <div style={{ width: 'fit-content' }}>
    <CardItem {...args}></CardItem>
  </div>
)

Root.args = {
  size: 'large',
  label: 'Title',
}
