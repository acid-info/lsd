import type { Meta, StoryObj } from '@storybook/react'
import { DateRangePicker } from './DateRangePicker'

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
        value: ['outlined', 'underlined'],
      },
    },
  },
} as Meta<typeof DateRangePicker>

type Story = StoryObj<typeof DateRangePicker>

export const Uncontrolled: Story = {
  args: {
    supportingText: 'Supporting text',
    label: 'Label',
    disabled: false,
    error: false,
    startValue: undefined,
    endValue: undefined,
    errorIcon: false,
    withCalendar: true,
    size: 'large',
    variant: 'underlined',
    onStartDateChange: () => {},
    onEndDateChange: () => {},
  },
}

export const Controlled: Story = {
  args: {
    supportingText: 'Supporting text',
    label: 'Label',
    disabled: false,
    error: false,
    startValue: '2023-01-02',
    endValue: '2023-01-10',
    errorIcon: false,
    withCalendar: true,
    size: 'large',
    variant: 'underlined',
    onStartDateChange: () => {},
    onEndDateChange: () => {},
  },
}
