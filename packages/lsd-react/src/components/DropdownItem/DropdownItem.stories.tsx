import { Meta, Story } from '@storybook/react'
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

export const Root: Story<DropdownItemProps> = (args) => (
  <div style={{ width: 400, overflow: 'hidden' }}>
    <DropdownItem {...args}></DropdownItem>
  </div>
)

Root.args = {
  label: 'label',
  size: 'large',
  selected: false,
  withIcon: false,
  disabled: false,
}
