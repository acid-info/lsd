import { Meta, StoryObj } from '@storybook/react'
import { Dropdown, DropdownProps } from './Dropdown'

const subtitle = `Input`
const description = `Dropdown is a menu of hidden options that a user can reveal by clicking on the component. It allows users to select one or multiple options, which can represent values in forms or serve as actions to filter or sort existing content.`

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    componentSubtitle: subtitle,
    docs: {
      description: {
        component: description,
      },
    },
  },
  argTypes: {
    variant: {
      type: {
        name: 'enum',
        value: ['outlined', 'underlined'],
      },
    },
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta

export const Root: StoryObj<DropdownProps> = {
  render: (args) => (
    <div style={{ width: 300 }}>
      <Dropdown {...args}></Dropdown>
    </div>
  ),

  args: {
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
  },
}
