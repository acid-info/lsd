import { Meta, Story } from '@storybook/react'
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

export const Root: Story<CollapseHeaderProps> = (args) => (
  <div style={{ width: 'fit-content' }}>
    <CollapseHeader {...args}></CollapseHeader>
  </div>
)

Root.args = {
  size: 'large',
  label: 'title',
  disabled: false,
}
