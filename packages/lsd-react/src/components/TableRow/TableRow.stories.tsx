import { Meta, Story } from '@storybook/react'
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

export const Root: Story<TableRowProps> = ({ ...args }) => {
  return <TableRow {...args}>Content</TableRow>
}

Root.args = {}
