import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { TableItem, TableItemProps } from './TableItem'

export default {
  title: 'TableItem',
  component: TableItem,
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

export const Root: StoryObj<TableItemProps> = {
  render: ({ ...args }) => {
    return <TableItem {...args}>Content</TableItem>
  },

  args: {},
}
