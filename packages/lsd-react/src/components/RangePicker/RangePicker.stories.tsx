import { Meta, Story } from '@storybook/react'
import { RangePicker, RangePickerProps } from './RangePicker'

export default {
  title: 'RangePicker',
  component: RangePicker,
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

export const Uncontrolled: Story<RangePickerProps> = ({ ...args }) => {
  return <RangePicker {...args} />
}

export const Controlled: Story<RangePickerProps> = ({ ...args }) => {
  return <RangePicker {...args} />
}

Uncontrolled.args = {
  disabled: false,
  error: false,
  startValue: undefined,
  endValue: undefined,
  onChange: undefined,
  errorIcon: false,
  clearButton: true,
  withCalendar: true,
  size: 'large',
}

Controlled.args = {
  disabled: false,
  error: false,
  startValue: '2023-01-02',
  endValue: '2023-01-10',
  onChange: undefined,
  errorIcon: false,
  clearButton: true,
  withCalendar: true,
  size: 'large',
}
