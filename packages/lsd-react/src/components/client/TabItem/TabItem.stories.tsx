import { Meta, StoryObj } from '@storybook/react'
import { useStorybookIconComponent } from '../../../utils/storybook.utils'
import { TabItem, TabItemProps } from './TabItem'

const subtitle = ``
const description = ``

export default {
  title: 'TabItem',
  component: TabItem,
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
    icon: {
      type: {
        name: 'enum',
        value: useStorybookIconComponent.options,
      },
      defaultValue: 'FolderIcon',
    },
  },
} as Meta

export const Root: StoryObj<TabItemProps & { icon: string }> = {
  render: ({ icon, ...args }) => {
    const Icon = useStorybookIconComponent(icon)

    return (
      <TabItem {...args} icon={Icon && <Icon color="primary" />}>
        Tab
      </TabItem>
    )
  },

  args: {
    disabled: false,
    selected: false,
    size: 'large',
  },
}
