import { Meta, Story } from '@storybook/react'
import { useStorybookIconComponent } from '../../utils/storybook.utils'
import { TabItem, TabItemProps } from './TabItem'

export default {
  title: 'TabItem',
  component: TabItem,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
      defaultValue: 'large',
    },
    icon: {
      type: {
        name: 'enum',
        value: useStorybookIconComponent.options,
      },
      defaultValue: 'FolderIcon',
    },
  },
} as Meta

export const Root: Story<TabItemProps & { icon: string }> = ({
  icon,
  ...args
}) => {
  const Icon = useStorybookIconComponent(icon)

  return (
    <TabItem {...args} icon={Icon && <Icon color="primary" />}>
      Tab
    </TabItem>
  )
}

Root.args = {
  disabled: false,
  selected: false,
  size: 'large',
}
