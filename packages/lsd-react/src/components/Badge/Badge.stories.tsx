import { Meta, Story } from '@storybook/react'
import { FolderIcon } from '../Icons'
import { Badge, BadgeProps } from './Badge'

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    variant: {
      type: {
        name: 'enum',
        value: ['outlined', 'filled'],
      },
    },
    size: {
      type: {
        name: 'enum',
        value: ['large', 'small'],
      },
      defaultValue: 'large',
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

export const Root: Story<BadgeProps> = (args) => (
  <Badge {...args} icon={<FolderIcon color="primary" />}>
    Badge
  </Badge>
)

Root.args = {
  variant: 'outlined',
  iconDirection: 'left',
  disabled: false,
  size: 'large',
}
