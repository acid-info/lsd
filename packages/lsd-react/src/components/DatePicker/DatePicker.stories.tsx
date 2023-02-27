import { Meta, Story } from '@storybook/react'
import { DatePicker, DatePickerProps } from './DatePicker'

export default {
  title: 'DatePicker',
  component: DatePicker,
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

export const Root: Story<DatePickerProps> = ({ ...args }) => {
  return <DatePicker {...args}>DatePicker</DatePicker>
}

Root.args = {
  size: 'large',
  supportingText: 'Supporting text',
  disabled: false,
  error: false,
  value: '',
  onChange: undefined,
  errorIcon: false,
  clearButton: true,
  withCalendar: true,
}
