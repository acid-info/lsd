import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { TableRow, TableRowProps } from './TableRow'

export default {
  title: 'TableRow',
  component: TableRow,
  argTypes: {
    type: {
      type: {
        name: 'enum',
        value: ['default', 'checkbox', 'radio'],
      },
    },
  },
} as Meta

export const Root: StoryObj<TableRowProps> = {
  render: ({ ...args }) => {
    return <TableRow {...args}>Content</TableRow>
  },

  args: {},
}
