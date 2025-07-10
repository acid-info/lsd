import { Meta, StoryObj } from '@storybook/react'
import { TableItem, TableItemProps } from './TableItem'

const subtitle = ``
const description = ``

export default {
  title: 'TableItem',
  component: TableItem,
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
