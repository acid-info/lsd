import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { useStorybookIconComponent } from '../../utils/storybook.utils'
import { IconButton } from '../IconButton/IconButton'
import { IconButtonGroup, IconButtonGroupProps } from './IconButtonGroup'

export default {
  title: 'IconButtonGroup',
  component: IconButtonGroup,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
      defaultValue: 'large',
    },
    variant: {
      type: {
        name: 'enum',
        value: ['filled', 'outlined'],
      },
      defaultValue: 'outlined',
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

export const Root: StoryObj<
  IconButtonGroupProps & {
    icon: string
    buttons: number
  }
> = {
  render: ({ icon, buttons, ...args }) => {
    const IconComponent = useStorybookIconComponent(icon)

    return (
      <IconButtonGroup {...args}>
        {new Array(Math.max(1, buttons)).fill(null).map((tab, index) => (
          <IconButton key={index}>
            {IconComponent && <IconComponent color="primary"></IconComponent>}
          </IconButton>
        ))}
      </IconButtonGroup>
    )
  },

  args: {
    size: 'large',
    variant: 'outlined',
    disabled: false,
    buttons: 4,
    icon: 'KeyboardReturnIcon',
  },
}
