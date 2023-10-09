import { StoryObj, Meta, StoryFn } from '@storybook/react'
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
        value: ['outlined', 'underlined'],
      },
    },
  },
} as Meta

export const Uncontrolled: StoryObj<DateFieldProps> = {
  render: ({ ...args }) => {
    return <DateField {...args} />
  },

  args: {
    id: 'label',
    size: 'large',
    supportingText: 'Supporting text',
    disabled: false,
    value: undefined,
    onChange: undefined,
    error: false,
    errorIcon: false,
    clearButton: true,
    variant: 'underlined',
    label: 'Label',
  },
}

export const Controlled: StoryObj<DateFieldProps> = {
  render: ({ ...args }) => {
    return <DateField {...args} />
  },

  args: {
    id: 'label',
    size: 'large',
    supportingText: 'Supporting text',
    disabled: false,
    value: '2023-01-01',
    onChange: undefined,
    error: false,
    errorIcon: false,
    clearButton: true,
    variant: 'underlined',
    label: 'Label',
  },
}
