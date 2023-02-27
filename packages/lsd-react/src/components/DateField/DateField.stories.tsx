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

export const Root: Story<DateFieldProps> = ({ ...args }) => {
  return <DateField {...args} />
}

Root.args = {
  size: 'large',
  supportingText: 'Supporting text',
  disabled: false,
  error: false,
  errorIcon: false,
  clearButton: true,
  onChange: undefined,
}
