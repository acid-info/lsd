import { Meta, Story } from '@storybook/react'
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

export const Root: Story<NumberInputProps> = ({ ...args }) => {
  return <NumberInput {...args} />
}

Root.args = {
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
}
