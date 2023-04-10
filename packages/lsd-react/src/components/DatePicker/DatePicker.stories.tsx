import { Meta, Story } from '@storybook/react'
import { DatePicker, DatePickerProps } from './DatePicker'

export default {
  title: 'DatePicker',
  component: DatePicker,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
      defaultValue: 'large',
    },
    variant: {
      type: {
        name: 'enum',
        value: ['outlined', 'outlined-bottom'],
      },
      defaultValue: 'large',
    },
  },
} as Meta

export const Uncontrolled: Story<DatePickerProps> = ({ ...args }) => {
  return <DatePicker {...args}>DatePicker</DatePicker>
}

export const Controlled: Story<DatePickerProps> = ({ ...args }) => {
  return <DatePicker {...args}>DatePicker</DatePicker>
}

Uncontrolled.args = {
  id: 'label',
  supportingText: 'Supporting text',
  disabled: false,
  error: false,
  value: undefined,
  onChange: undefined,
  errorIcon: false,
  clearButton: true,
  withCalendar: true,
  size: 'large',
  variant: 'outlined-bottom',
  label: 'Label',
}

Controlled.args = {
  id: 'label',
  supportingText: 'Supporting text',
  disabled: false,
  error: false,
  value: '2023-01-01',
  onChange: undefined,
  errorIcon: false,
  clearButton: true,
  withCalendar: true,
  size: 'large',
  variant: 'outlined-bottom',
  label: 'Label',
}
