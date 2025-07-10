import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { BreadcrumbItem, BreadcrumbItemProps } from './BreadcrumbItem'

export default {
  title: 'BreadcrumbItem',
  component: BreadcrumbItem,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'large'],
      },
    },
  },
} as Meta

export const Root: StoryObj<BreadcrumbItemProps> = {
  render: (args) => (
    <div style={{ width: 'fit-content' }}>
      <BreadcrumbItem {...args}></BreadcrumbItem>
    </div>
  ),

  args: {
    label: 'label',
    outlined: true,
    size: 'large',
  },
}
