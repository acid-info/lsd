import { Meta, Story } from '@storybook/react'
import { TableBody, TableBodyProps } from './TableBody'

export default {
  title: 'TableBody',
  component: TableBody,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta

export const Root: Story<TableBodyProps & { body: string }> = ({
  body,
  ...args
}) => (
  <div style={{ maxWidth: 800 }}>
    <TableBody {...args}>{body}</TableBody>
  </div>
)

Root.args = {
  size: 'large',
  options: new Array(4).fill(null).map((value, index) => ({
    value: `${index}`,
    name: `Title ${index + 1}`,
  })),
}
