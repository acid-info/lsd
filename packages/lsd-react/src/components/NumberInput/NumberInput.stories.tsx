import { Meta, StoryObj } from '@storybook/react'
import { NumberInput, NumberInputProps } from './NumberInput'

const subtitle = `Input`
const description = `NumberInput allows users to input a numeric value and adjust the value incrementally using a two-segment control.`

export default {
  title: 'NumberInput',
  component: NumberInput,
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
