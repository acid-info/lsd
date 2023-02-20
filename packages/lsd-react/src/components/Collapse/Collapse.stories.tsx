import { Meta, Story } from '@storybook/react'
import { Collapse, CollapseProps } from './Collapse'

export default {
  title: 'Collapse',
  component: Collapse,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta

export const Root: Story<CollapseProps> = (args) => (
  <div style={{ width: 'fit-content' }}>
    <Collapse {...args}></Collapse>
  </div>
)

Root.args = {
  size: 'large',
  label: 'title',
  disabled: false,
  text: 'Slot component.\nReplace me.\n↵',
  textInline: false,
}
