import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { NumberInput, NumberInputProps } from './NumberInput'

export default {
  title: 'NumberInput',
  component: NumberInput,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
      defaultValue: 'large',
    },
  },
} as Meta

export const Root: StoryObj<NumberInputProps> = {
  render: ({ ...args }) => {
    return <NumberInput {...args} />
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
    min: -10,
    max: 10,
    step: 1,
    label: 'Label',
  },
}
