import { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb, BreadcrumbProps } from './Breadcrumb'

const subtitle = `Navigation`
const description = `Breadcrumbs show users their current location on the website or app and allow them to quickly navigate back to a parent level or a previous step.`

export default {
  title: 'Breadcrumb',
  parameters: {
    componentSubtitle: subtitle,
    docs: {
      description: {
        component: description,
      },
    },
  },
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
