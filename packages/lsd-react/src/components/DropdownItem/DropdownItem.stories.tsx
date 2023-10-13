import { Meta, StoryObj } from '@storybook/react'
import { DropdownItem, DropdownItemProps } from './DropdownItem'

const subtitle = ``
const description = ``

export default {
  title: 'DropdownItem',
  component: DropdownItem,
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
