import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { RadioButton, RadioButtonProps } from './RadioButton'

export default {
  title: 'RadioButton',
  component: RadioButton,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
      defaultValue: 'large',
    },
  },
} as Meta

export const Root: StoryObj<RadioButtonProps> = {
  render: (args) => <RadioButton {...args}>RadioButton label</RadioButton>,

  args: {
    size: 'large',
    disabled: false,
    checked: undefined,
    onChange: undefined,
    value: '1',
  },
}
