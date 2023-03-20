import { Meta, Story } from '@storybook/react'
import { DateField, DateFieldProps } from './DateField'

export default {
  title: 'DateField',
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

export const Uncontrolled: Story<DateFieldProps> = ({ ...args }) => {
  return <DateField {...args} />
}

export const Controlled: Story<DateFieldProps> = ({ ...args }) => {
  return <DateField {...args} />
}

Uncontrolled.args = {
  size: 'large',
  supportingText: 'Supporting text',
  disabled: false,
  value: undefined,
  onChange: undefined,
  error: false,
  errorIcon: false,
  clearButton: true,
}

Controlled.args = {
  size: 'large',
  supportingText: 'Supporting text',
  disabled: false,
  value: '2023-01-01',
  onChange: undefined,
  error: false,
  errorIcon: false,
  clearButton: true,
}
