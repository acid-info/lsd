import { Meta, StoryObj } from '@storybook/react'
import { useStorybookIconComponent } from '../../utils/storybook.utils'
import { IconButton, IconButtonProps } from './IconButton'

const subtitle = `Input`
const description = `IconButton component is used to trigger an action or event, it is labeled with an icon.`

export default {
  title: 'IconButton',
  component: IconButton,
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

export const Root: StoryObj<IconButtonProps & { icon: string }> = {
  render: ({ icon, ...args }) => {
    const Icon = useStorybookIconComponent(icon)

    return <IconButton {...args}>{Icon && <Icon color="primary" />}</IconButton>
  },

  args: {
    variant: 'outlined',
    icon: 'KeyboardReturnIcon',
    size: 'large',
    disabled: false,
  },
}
