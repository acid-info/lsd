import { Meta, StoryObj } from '@storybook/react'
import { DatePicker, DatePickerProps } from './DatePicker'

const subtitle = `Input`
const description = `DatePicker component allows users select a date.`

export default {
  title: 'DatePicker',
  component: DatePicker,
  parameters: {
    componentSubtitle: subtitle,
    docs: {
      description: {
        component: description,
      },
    },
  },
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
        value: ['outlined', 'underlined'],
      },
    },
  },
} as Meta

export const Uncontrolled: StoryObj<DatePickerProps> = {
  render: ({ ...args }) => {
    return <DatePicker {...args}>DatePicker</DatePicker>
  },

  args: {
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
    variant: 'underlined',
    label: 'Label',
  },
}

export const Controlled: StoryObj<DatePickerProps> = {
  render: ({ ...args }) => {
    return <DatePicker {...args}>DatePicker</DatePicker>
  },

  args: {
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
    variant: 'underlined',
    label: 'Label',
  },
}
