import { Meta, Story } from '@storybook/react'
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

export const Root: Story<TableItemProps> = ({ ...args }) => {
  return <TableItem {...args}>Content</TableItem>
}

Root.args = {}
