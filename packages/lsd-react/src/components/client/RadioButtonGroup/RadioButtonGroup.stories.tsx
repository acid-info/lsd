import { Meta, StoryObj } from '@storybook/react'
import { RadioButton } from '../RadioButton'
import { RadioButtonGroup, RadioButtonGroupProps } from './RadioButtonGroup'

const subtitle = `Input`
const description = `RadioButtonGroup component groups multiple RadioButton components, inheriting all their available styles.`

export default {
  title: 'RadioButtonGroup',
  component: RadioButtonGroup,
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

export const Root: StoryObj<RadioButtonGroupProps> = {
  render: (args) => (
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
  ),

  args: {
    size: 'large',
    label: 'Label',
  },
}
