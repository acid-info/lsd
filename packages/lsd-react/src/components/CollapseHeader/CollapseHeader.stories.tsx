import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { CollapseHeader, CollapseHeaderProps } from './CollapseHeader'

export default {
  title: 'CollapseHeader',
  component: CollapseHeader,
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
