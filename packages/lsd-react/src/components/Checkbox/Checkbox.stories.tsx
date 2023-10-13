import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'

const subtitle = `Input`
const description = `Checkbox component allows users to select one or multiple items from a list. It is ideal for cases where multiple selections are required from a range of options.`

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    componentSubtitle: subtitle,
    docs: {
      description: {
        component: description,
      },
    },
  },
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
