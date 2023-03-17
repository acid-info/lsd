import { Meta, Story } from '@storybook/react'
import { DateField, DateFieldProps } from './DateField'

export default {
  title: 'ControlledDateField',
  component: DateField,
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

export const Root: Story<DateFieldProps> = ({ ...args }) => {
  return <DateField {...args} />
}

Root.args = {
  size: 'large',
  supportingText: 'Supporting text',
  disabled: false,
  value: '2023-01-01',
  onChange: undefined,
  error: false,
  errorIcon: false,
  clearButton: true,
}
