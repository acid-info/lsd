import { Meta, Story } from '@storybook/react'
import { AddIcon, FolderIcon, KeyboardReturnIcon, MenuIcon } from '../Icons'
import { IconTag, IconTagProps } from './IconTag'

export default {
  title: 'IconTag',
  component: IconTag,
} as Meta

export const Root: Story<IconTagProps> = (args) => (
  <IconTag {...args}>
    <FolderIcon color="primary" />
  </IconTag>
)

Root.args = {
  variant: 'outlined',
}
