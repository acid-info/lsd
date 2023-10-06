import { StoryObj, Meta, StoryFn } from '@storybook/react'
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
    size: {
      type: {
        name: 'enum',
        value: ['large', 'small'],
      },
      defaultValue: 'large',
    },
    disabled: {
      type: {
        name: 'boolean',
        value: [true, false],
      },
    },
  },
} as Meta

export const Root: StoryObj<TagProps> = {
  render: (args) => (
    <Tag {...args} icon={<FolderIcon color="primary" />}>
      Tag
    </Tag>
  ),

  args: {
    variant: 'outlined',
    iconDirection: 'left',
    disabled: false,
    size: 'large',
  },
}
