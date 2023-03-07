import { Meta, Story } from '@storybook/react'
import { FolderIcon } from '../Icons'
import { SidebarItem } from '../SidebarItem'
import { SideBar, SideBarProps } from './Sidebar'

export default {
  title: 'SideBar',
  component: SideBar,
  argTypes: {
    mode: {
      type: {
        name: 'enum',
        value: ['full-menu', 'full-menu-with-icon', 'compact-menu'],
      },
    },
    disabled: {
      type: {
        name: 'boolean',
        value: [true, false],
      },
    },
  },
} as Meta

export const Root: Story<SideBarProps> = ({ mode, ...args }) => (
  <div style={{ width: 'fit-content' }}>
    <SideBar {...args}>
      <SidebarItem
        {...args}
        mode={mode}
        label="Link"
        link="#"
        icon={<FolderIcon color="primary" />}
      />
      <SidebarItem
        {...args}
        mode={mode}
        label="Link"
        link="#"
        icon={<FolderIcon color="primary" />}
      />
      <SidebarItem
        {...args}
        mode={mode}
        label="Link"
        link="#"
        icon={<FolderIcon color="primary" />}
      />
      <SidebarItem
        {...args}
        mode={mode}
        label="Link"
        link="#"
        icon={<FolderIcon color="primary" />}
      />
      <SidebarItem
        {...args}
        mode={mode}
        label="Link"
        link="#"
        icon={<FolderIcon color="primary" />}
      />
    </SideBar>
  </div>
)
Root.args = {
  mode: 'full-menu-with-icon',
  disabled: false,
}
