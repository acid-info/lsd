import { Meta, Story } from '@storybook/react'
import { Autocomplete, AutocompleteProps } from './Autocomplete'

export default {
  title: 'Autocomplete',
  component: Autocomplete,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['medium', 'large'],
      },
      defaultValue: 'large',
    },
  },
} as Meta

export const Root: Story<AutocompleteProps> = (args) => (
  <Autocomplete {...args}>Autocomplete</Autocomplete>
)
Root.args = {
  size: 'large',
  disabled: false,
  withIcon: false,
  error: false,
  placeholder: 'Placeholder',
  onChange: undefined,
  options: [
    {
      value: `1`,
      name: `input`,
    },
    {
      value: `2`,
      name: `Input`,
    },
    {
      value: `3`,
      name: `InputValue`,
    },
    {
      value: `4`,
      name: `Input Value`,
    },
    {
      value: `5`,
      name: `inputValue`,
    },
    {
      value: `6`,
      name: `input Value`,
    },
    {
      value: `7`,
      name: `text`,
    },
    {
      value: `8`,
      name: `Text`,
    },
    {
      value: `9`,
      name: `placeholder`,
    },
    {
      value: `10`,
      name: `Placeholder`,
    },
  ],
}
