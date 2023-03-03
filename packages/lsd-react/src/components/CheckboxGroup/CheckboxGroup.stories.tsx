import { Meta, Story } from '@storybook/react'
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

export const Root: Story<CheckboxGroupProps> = (args) => (
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
)

Root.args = {
  size: 'large',
  label: 'Label',
}
