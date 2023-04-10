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
      <div
        style={{
          display: 'flex',
          height: '102px',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          color="primary"
          variant={args.size === 'small' ? 'label2' : 'label1'}
          component="div"
        >
          Slot component.
        </Typography>
        <Typography
          color="primary"
          variant={args.size === 'small' ? 'label2' : 'label1'}
          component="div"
        >
          Replace me.
        </Typography>
        <Typography
          color="primary"
          variant={args.size === 'small' ? 'label2' : 'label1'}
          component="div"
        >
          ↵
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
