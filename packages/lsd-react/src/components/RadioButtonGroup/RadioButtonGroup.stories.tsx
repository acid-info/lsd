import { Meta, Story } from '@storybook/react'
import { RadioButton } from '../RadioButton'
import { RadioButtonGroup, RadioButtonGroupProps } from './RadioButtonGroup'

export default {
  title: 'RadioButtonGroup',
  component: RadioButtonGroup,
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

export const Root: Story<RadioButtonGroupProps> = (args) => (
  <RadioButtonGroup name="name" {...args}>
    <RadioButton value="1">RadioButton label</RadioButton>
    <RadioButton value="2">RadioButton label</RadioButton>
    <RadioButton value="3">RadioButton label</RadioButton>
    <RadioButton value="4">RadioButton label</RadioButton>
    <RadioButton value="5">RadioButton label</RadioButton>
    <RadioButton value="6">RadioButton label</RadioButton>
    <RadioButton value="7">RadioButton label</RadioButton>
    <RadioButton value="8">RadioButton label</RadioButton>
  </RadioButtonGroup>
)

Root.args = {
  size: 'large',
  label: 'Label',
}
