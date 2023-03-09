import { Meta, Story } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
      defaultValue: 'large',
    },
  },
} as Meta

export const Root: Story<CheckboxProps> = (args) => (
  <Checkbox {...args}>Checkbox</Checkbox>
)

Root.args = {
  size: 'large',
  disabled: false,
  indeterminate: false,
  checked: undefined,
  onChange: undefined,
}
