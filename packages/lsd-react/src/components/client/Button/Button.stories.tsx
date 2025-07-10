import { Meta, StoryObj } from '@storybook/react'
import { useStorybookIconComponent } from '../../../utils/storybook.utils'
import { Button, ButtonProps } from './Button'

const subtitle = `Input`
const description = `Button component is used to trigger an action or event, it is labeled to convey what will happen upon interaction.`

export default {
  title: 'Button',
  component: Button,
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
    },
  },
} as Meta

export const Root: StoryObj<ButtonProps & { icon: string }> = {
  render: ({ icon, ...args }) => {
    const IconComponent = useStorybookIconComponent(icon)
    const iconColor = args.variant === 'outlined' ? 'primary' : 'secondary'

    return (
      <Button
        {...args}
        icon={
          IconComponent && <IconComponent color={iconColor}></IconComponent>
        }
      >
        Button
      </Button>
    )
  },

  args: {
    disabled: false,
  },
}
