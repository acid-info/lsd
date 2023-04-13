import { Meta, Story } from '@storybook/react'
import { Badge, BadgeProps } from './Badge'
import { useStorybookIconComponent } from '../../utils/storybook.utils'

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
    icon: {
      type: {
        name: 'enum',
        value: useStorybookIconComponent.options,
      },
      defaultValue: 'FolderIcon',
    },
  },
} as Meta

export const Root: Story<BadgeProps & { icon: string }> = ({
  icon,
  ...args
}) => {
  const Icon = useStorybookIconComponent(icon)
  return (
    <Badge {...args} icon={Icon && <Icon color="primary" />}>
      Badge
    </Badge>
  )
}

Root.args = {
  variant: 'outlined',
  iconDirection: 'left',
  disabled: false,
  size: 'large',
  icon: 'FolderIcon',
}
