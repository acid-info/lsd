import { Meta, Story } from '@storybook/react'
import { Dropdown, DropdownProps } from './Dropdown'

export default {
  title: 'Dropdown',
  component: Dropdown,
} as Meta

export const Root: Story<DropdownProps> = (args) => (
  <div style={{ width: 300 }}>
    <Dropdown {...args}></Dropdown>
  </div>
)

Root.args = {
  size: 'large',
  label: 'Choose an option',
  supportingText: '',
  disabled: false,
  error: false,
  multi: false,
  bottomOutline: false,
  onChange: undefined,
  options: new Array(16).fill(null).map((value, index) => ({
    value: `${index}`,
    name: `Option ${index + 1}`,
  })),
}
