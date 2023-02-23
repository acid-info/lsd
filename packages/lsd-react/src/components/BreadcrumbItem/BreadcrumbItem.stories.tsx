import { Meta, Story } from '@storybook/react'
import { BreadcrumbItem, BreadcrumbItemProps } from './BreadcrumbItem'

export default {
  title: 'BreadcrumbItem',
  component: BreadcrumbItem,
} as Meta

export const Root: Story<BreadcrumbItemProps> = (args) => (
  <div style={{ width: 'fit-content' }}>
    <BreadcrumbItem {...args}></BreadcrumbItem>
  </div>
)

Root.args = {
  label: 'label',
  current: true,
}
