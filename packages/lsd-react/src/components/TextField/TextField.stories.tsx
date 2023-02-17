import { Meta, Story } from '@storybook/react'
import { TextField, TextFieldProps } from './TextField'

export default {
  title: 'TextField',
  component: TextField,
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

export const Root: Story<TextFieldProps> = (args) => (
  <TextField {...args}>TextField</TextField>
)
Root.args = {
  size: 'large',
  supportingText: 'Supporting text',
  disabled: false,
  withIcon: false,
  error: false,
  placeholder: 'Placeholder',
}
