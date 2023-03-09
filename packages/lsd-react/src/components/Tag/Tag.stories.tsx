import { Meta, Story } from '@storybook/react'
import { FolderIcon } from '../Icons'
import { Tag, TagProps } from './Tag'

export default {
  title: 'Tag',
  component: Tag,
  argTypes: {
    variant: {
      type: {
        name: 'enum',
        value: ['outlined', 'filled'],
      },
    },
    iconDirection: {
      type: {
        name: 'enum',
        value: ['left', 'right', 'none'],
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

export const Root: Story<TagProps> = (args) => (
  <Tag {...args} icon={<FolderIcon color="primary" />} />
)

Root.args = {
  variant: 'outlined',
  label: 'Tag',
  iconDirection: 'left',
  disabled: false,
}
