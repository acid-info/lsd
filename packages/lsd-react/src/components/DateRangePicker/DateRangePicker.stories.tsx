import { Meta, Story } from '@storybook/react'
import { DateRangePicker, DateRangePickerProps } from './DateRangePicker'

export default {
  title: 'DateRangePicker',
  component: DateRangePicker,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
    },
    variant: {
      type: {
        name: 'enum',
        value: ['outlined', 'outlined-bottom'],
      },
    },
  },
} as Meta

export const Uncontrolled: Story<DateRangePickerProps> = ({ ...args }) => {
  return <DateRangePicker {...args} />
}

export const Controlled: Story<DateRangePickerProps> = ({ ...args }) => {
  return <DateRangePicker {...args} />
}

Uncontrolled.args = {
  supportingText: 'Supporting text',
  label: 'Label',
  disabled: false,
  error: false,
  startValue: undefined,
  endValue: undefined,
  errorIcon: false,
  withCalendar: true,
  size: 'large',
  variant: 'outlined-bottom',
}

Controlled.args = {
  supportingText: 'Supporting text',
  label: 'Label',
  disabled: false,
  error: false,
  startValue: '2023-01-02',
  endValue: '2023-01-10',
  errorIcon: false,
  withCalendar: true,
  size: 'large',
  variant: 'outlined-bottom',
}
