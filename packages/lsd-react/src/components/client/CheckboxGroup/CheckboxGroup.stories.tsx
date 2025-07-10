import { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '../Checkbox'
import { CheckboxGroup, CheckboxGroupProps } from './CheckboxGroup'

const subtitle = `Input`
const description = `CheckboxGroup component groups multiple Checkbox components, inheriting all their available styles.`

export default {
  title: 'CheckboxGroup',
  parameters: {
    componentSubtitle: subtitle,
    docs: {
      description: {
        component: description,
      },
    },
  },
  component: CheckboxGroup,
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

export const Root: StoryObj<CheckboxGroupProps> = {
  render: (args) => (
    <CheckboxGroup {...args}>
      <Checkbox>Checkbox label</Checkbox>
      <Checkbox>Checkbox label</Checkbox>
      <Checkbox>Checkbox label</Checkbox>
      <Checkbox>Checkbox label</Checkbox>
      <Checkbox>Checkbox label</Checkbox>
      <Checkbox>Checkbox label</Checkbox>
      <Checkbox>Checkbox label</Checkbox>
      <Checkbox>Checkbox label</Checkbox>
    </CheckboxGroup>
  ),

  args: {
    size: 'large',
    label: 'Label',
  },
}
