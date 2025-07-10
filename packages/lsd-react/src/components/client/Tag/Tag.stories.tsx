import { Meta, StoryObj } from '@storybook/react'
import { FolderIcon } from '../Icons'
import { Tag, TagProps } from './Tag'

const subtitle = `Data Display`
const description = `Tags are used to label, categorise and organise items with descriptive keywords.`

export default {
  title: 'Tag',
  component: Tag,
  parameters: {
    componentSubtitle: subtitle,
    docs: {
      description: {
        component: description,
      },
    },
  },
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
