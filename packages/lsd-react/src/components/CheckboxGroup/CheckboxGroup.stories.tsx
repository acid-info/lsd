import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { Checkbox } from '../Checkbox'
import { CheckboxGroup, CheckboxGroupProps } from './CheckboxGroup'

export default {
  title: 'CheckboxGroup',
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
