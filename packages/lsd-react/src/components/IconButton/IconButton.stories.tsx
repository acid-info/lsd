import { Meta, Story } from '@storybook/react'
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

export const Root: Story<IconButtonProps & { icon: string }> = ({
  icon,
  ...args
}) => {
  const Icon = useStorybookIconComponent(icon)

  return <IconButton {...args}>{Icon && <Icon color="primary" />}</IconButton>
}

Root.args = {
  variant: 'outlined',
  icon: 'FolderIcon',
  size: 'large',
  disabled: false,
}
