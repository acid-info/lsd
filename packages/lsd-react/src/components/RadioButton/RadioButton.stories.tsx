import { Meta, StoryObj } from '@storybook/react'
import { RadioButton, RadioButtonProps } from './RadioButton'

const subtitle = `Input`
const description = `Radio buttons enable users to make a single selection from a list of options, particularly suitable for scenarios where you have a set of mutually exclusive choices.`

export default {
  title: 'RadioButton',
  component: RadioButton,
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
