import { Meta, Story } from '@storybook/react'
import { Slot, SlotProps } from './Slot'

export default {
  title: 'Slot',
  component: Slot,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta

export const Root: Story<SlotProps> = (args) => <Slot {...args}>Slot</Slot>
Root.args = {
  size: 'large',
  text: 'Slot component.\nReplace me.\n↵',
  textInline: false,
}
