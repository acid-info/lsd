import { Meta, Story } from '@storybook/react'
import { TableHeader, TableHeaderProps } from './TableHeader'

export default {
  title: 'TableHeader',
  component: TableHeader,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta

export const Root: Story<TableHeaderProps & { title: string }> = ({
  title,
  ...args
}) => (
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
)

Root.args = {
  size: 'large',
}
