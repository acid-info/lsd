import { Meta, StoryObj } from '@storybook/react'
import { useStorybookIconComponent } from '../../../utils/storybook.utils'
import { Badge, BadgeProps } from './Badge'

const subtitle = `Data Display`
const description = `Badge component is used to display concise pieces of information, such as notifications, counts, statuses, and more. Typically, it is positioned near other UI elements to convey information associated with them.`

export default {
  title: 'Badge',
  component: Badge,
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

export const Root: StoryObj<BadgeProps & { icon: string }> = {
  render: ({ icon, ...args }) => {
    const Icon = useStorybookIconComponent(icon)
    return (
      <Badge {...args} icon={Icon && <Icon color="primary" />}>
        Badge
      </Badge>
    )
  },

  args: {
    variant: 'outlined',
    iconDirection: 'left',
    disabled: false,
    size: 'large',
    icon: 'FolderIcon',
  },
}
