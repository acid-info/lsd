import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { DropdownItem, DropdownItemProps } from './DropdownItem'

export default {
  title: 'DropdownItem',
  component: DropdownItem,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta

export const Root: StoryObj<DropdownItemProps> = {
  render: (args) => (
    <div style={{ width: 400, overflow: 'hidden' }}>
      <DropdownItem {...args}></DropdownItem>
    </div>
  ),

  args: {
    label: 'label',
    size: 'large',
    selected: false,
    withIcon: false,
    disabled: false,
  },
}
