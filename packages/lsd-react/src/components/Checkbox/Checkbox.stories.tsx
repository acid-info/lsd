import { StoryObj, Meta, StoryFn } from '@storybook/react'
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

export const Root: StoryObj<CheckboxProps> = {
  render: (args) => <Checkbox {...args}>Checkbox</Checkbox>,

  args: {
    size: 'large',
    disabled: false,
    indeterminate: false,
    checked: undefined,
    onChange: undefined,
  },
}
