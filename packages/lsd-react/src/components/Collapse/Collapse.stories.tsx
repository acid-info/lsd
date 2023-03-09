import { Meta, Story } from '@storybook/react'
import { Typography } from '../Typography'
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
    <Collapse {...args}>
      <div style={{ padding: '10px 18px' }}>
        <Typography color="primary" component="label">
          Slot component
        </Typography>
      </div>
    </Collapse>
  </div>
)

Root.args = {
  size: 'large',
  label: 'Title',
  disabled: false,
}
