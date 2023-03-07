import { Meta, Story } from '@storybook/react'
import { useStorybookIconComponent } from '../../utils/storybook.utils'
import { FolderIcon } from '../Icons'
import { SidebarItem, SidebarItemProps } from './SidebarItem'

export default {
  title: 'SidebarItem',
  component: SidebarItem,
  argTypes: {
    mode: {
      type: {
        name: 'enum',
        value: ['full-menu', 'full-menu-with-icon', 'compact-menu'],
      },
    },
    icon: {
      type: {
        name: 'enum',
        value: useStorybookIconComponent.options,
      },
      defaultValue: 'FolderIcon',
    },
    disabled: {
      type: {
        name: 'boolean',
        value: [true, false],
      },
    },
  },
} as Meta

export const Root: Story<
  SidebarItemProps & {
    icon: string
  }
> = ({ icon, ...args }) => {
  const IconComponent = useStorybookIconComponent(icon)
  return (
    <SidebarItem
      {...args}
      icon={IconComponent && <IconComponent color="primary"></IconComponent>}
    />
  )
}

Root.args = {
  mode: 'full-menu-with-icon',
  icon: 'FolderIcon',
  disabled: false,
  link: '#',
  label: 'Link',
}
