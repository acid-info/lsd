import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { Breadcrumb, BreadcrumbProps } from './Breadcrumb'

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'large'],
      },
    },
  },
} as Meta

export const Root: StoryObj<BreadcrumbProps> = {
  render: (args) => (
    <div style={{ width: 'fit-content' }}>
      <Breadcrumb {...args}></Breadcrumb>
    </div>
  ),

  args: {
    disabled: false,
    onChange: undefined,
    options: new Array(6).fill(null).map((value, index) => ({
      name: `${index}`,
      value: `Breadcrumb`,
      link: `/${index + 1}`,
    })),
    ellipsis: false,
    maxItems: 6,
    size: 'large',
  },
}
