import { Meta, Story } from '@storybook/react'
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

export const Root: Story<RadioButtonProps> = (args) => (
  <RadioButton {...args}>RadioButton label</RadioButton>
)

Root.args = {
  size: 'large',
  disabled: false,
  checked: undefined,
  onChange: undefined,
}
