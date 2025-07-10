import { Meta, StoryObj } from '@storybook/react'
import { TableBody, TableBodyProps } from './TableBody'

const subtitle = ``
const description = ``

export default {
  title: 'TableBody',
  component: TableBody,
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

export const Root: StoryObj<TableBodyProps & { body: string }> = {
  render: ({ body, ...args }) => (
    <div style={{ maxWidth: 800 }}>
      <TableBody {...args}>{body}</TableBody>
    </div>
  ),

  args: {
    size: 'large',
    options: new Array(4).fill(null).map((value, index) => ({
      value: `${index}`,
      name: `Title ${index + 1}`,
    })),
  },
}
