import { Meta, Story } from '@storybook/react'
import { DateField, DateFieldProps } from './DateField'

export default {
  title: 'DateField',
  component: DateField,
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

export const Uncontrolled: Story<DateFieldProps> = ({ ...args }) => {
  return <DateField {...args} />
}

export const Controlled: Story<DateFieldProps> = ({ ...args }) => {
  return <DateField {...args} />
}

Uncontrolled.args = {
  id: 'label',
  size: 'large',
  supportingText: 'Supporting text',
  disabled: false,
  value: undefined,
  onChange: undefined,
  error: false,
  errorIcon: false,
  clearButton: true,
  variant: 'outlined-bottom',
  label: 'Label',
}

Controlled.args = {
  id: 'label',
  size: 'large',
  supportingText: 'Supporting text',
  disabled: false,
  value: '2023-01-01',
  onChange: undefined,
  error: false,
  errorIcon: false,
  clearButton: true,
  variant: 'outlined-bottom',
  label: 'Label',
}
