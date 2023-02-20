import { Meta, Story } from '@storybook/react'
import { CollapseItem, CollapseItemProps } from './CollapseItem'

export default {
  title: 'CollapseItem',
  component: CollapseItem,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta

export const Root: Story<CollapseItemProps> = (args) => (
  <div style={{ width: 'fit-content' }}>
    <CollapseItem {...args}></CollapseItem>
  </div>
)

Root.args = {
  size: 'large',
  label: 'title',
  disabled: false,
  open: false,
}
