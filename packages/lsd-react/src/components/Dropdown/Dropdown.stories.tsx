import { Meta, Story } from '@storybook/react'
import { Dropdown, DropdownProps } from './Dropdown'

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    variant: {
      type: {
        name: 'enum',
        value: ['outlined', 'outlined-bottom'],
      },
      defaultValue: 'large',
    },
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta

export const Root: Story<DropdownProps> = (args) => (
  <div style={{ width: 300 }}>
    <Dropdown {...args}></Dropdown>
  </div>
)

Root.args = {
  id: 'cryptocurrency',
  size: 'large',
  triggerLabel: 'Choose an option',
  supportingText: '',
  disabled: false,
  error: false,
  multi: false,
  variant: 'outlined',
  onChange: undefined,
  options: new Array(16).fill(null).map((value, index) => ({
    value: `${index}`,
    name: `Option ${index + 1}`,
  })),
  label: 'Cryptocurrency',
}
