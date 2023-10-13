import { Meta, StoryObj } from '@storybook/react'
import { CollapseHeader, CollapseHeaderProps } from './CollapseHeader'

const subtitle = ``
const description = ``

export default {
  title: 'CollapseHeader',
  component: CollapseHeader,
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

export const Root: StoryObj<CollapseHeaderProps> = {
  render: (args) => (
    <div style={{ width: 'fit-content' }}>
      <CollapseHeader {...args}></CollapseHeader>
    </div>
  ),

  args: {
    size: 'large',
    label: 'title',
    disabled: false,
  },
}
