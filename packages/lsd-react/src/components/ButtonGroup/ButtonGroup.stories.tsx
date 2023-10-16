import { StoryObj, Meta } from '@storybook/react'
import { useStorybookIconComponent } from '../../utils/storybook.utils'
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup'
import { Button } from '../Button/Button'

export default {
  title: 'ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
    },
    icon: {
      type: {
        name: 'enum',
        value: useStorybookIconComponent.options,
      },
    },
    variant: {
      type: {
        name: 'enum',
        value: ['outlined', 'filled'],
      },
    },
  },
} as Meta

type ButtonGroupStoryProps = ButtonGroupProps & {
  icon: string
  buttonText: string
}

export const Root: StoryObj<ButtonGroupStoryProps> = ({
  icon,
  buttonText,
  ...args
}: ButtonGroupStoryProps) => {
  const IconComponent = useStorybookIconComponent(icon)
  const iconColor = args.variant === 'outlined' ? 'primary' : 'secondary'

  return (
    <ButtonGroup {...args}>
      <Button
        icon={
          IconComponent && <IconComponent color={iconColor}></IconComponent>
        }
      >
        {buttonText}
      </Button>
      <Button
        icon={
          IconComponent && <IconComponent color={iconColor}></IconComponent>
        }
      >
        {buttonText}
      </Button>
      <Button
        icon={
          IconComponent && <IconComponent color={iconColor}></IconComponent>
        }
      >
        {buttonText}
      </Button>
      <Button
        icon={
          IconComponent && <IconComponent color={iconColor}></IconComponent>
        }
      >
        {buttonText}
      </Button>
    </ButtonGroup>
  )
}

Root.args = {
  size: 'large',
  buttonText: 'Button',
  disabled: false,
  variant: 'outlined',
}
