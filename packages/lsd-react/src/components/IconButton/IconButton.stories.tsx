import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { useStorybookIconComponent } from '../../utils/storybook.utils'
import { IconButton, IconButtonProps } from './IconButton'

export default {
  title: 'IconButton',
  component: IconButton,
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
