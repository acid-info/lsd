import { Meta, StoryObj } from '@storybook/react'
import { TableRow, TableRowProps } from './TableRow'

const subtitle = ``
const description = ``

export default {
  title: 'TableRow',
  component: TableRow,
  parameters: {
    componentSubtitle: subtitle,
    docs: {
      description: {
        component: description,
      },
    },
  },
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
