import { Meta, Story } from '@storybook/react'
import { Breadcrumb, BreadcrumbProps } from './Breadcrumb'

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
    },
    maxItems: {
      control: {
        type: 'number',
        min: 2,
        max: 6,
      },
    },
  },
} as Meta

export const Root: Story<BreadcrumbProps> = (args) => (
  <div style={{ width: 'fit-content' }}>
    <Breadcrumb {...args}></Breadcrumb>
  </div>
)

Root.args = {
  size: 'large',
  disabled: false,
  onChange: undefined,
  options: new Array(6).fill(null).map((value, index) => ({
    name: `${index}`,
    value: `Breadcrumb`,
    link: `/${index + 1}`,
  })),
  ellipsis: false,
  maxItems: 6,
}
