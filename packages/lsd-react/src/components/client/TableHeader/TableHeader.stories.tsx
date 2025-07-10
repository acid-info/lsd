import { Meta, StoryObj } from '@storybook/react'
import { TableHeader, TableHeaderProps } from './TableHeader'

const subtitle = ``
const description = ``

export default {
  title: 'TableHeader',
  component: TableHeader,
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

export const Root: StoryObj<TableHeaderProps & { title: string }> = {
  render: ({ title, ...args }) => (
    <div style={{ maxWidth: '800px' }}>
      <TableHeader {...args}>
        <div
          style={{
            padding: '10px 18px 28px',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ fontSize: '16px' }}>Table header</div>
          <div style={{ fontSize: '12px' }}>Table description</div>
        </div>
      </TableHeader>
    </div>
  ),

  args: {
    size: 'large',
  },
}
