import { Meta, StoryObj } from '@storybook/react'
import { Typography } from '../Typography'
import { Collapse, CollapseProps } from './Collapse'

const subtitle = `Surface`
const description = `A collapsible and expandable content section that can be used to group or hide content.`

export default {
  title: 'Collapse',
  component: Collapse,
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
    },
  },
} as Meta

export const Root: StoryObj<CollapseProps> = {
  render: (args) => (
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
  ),

  args: {
    size: 'large',
    label: 'Title',
    disabled: false,
  },
}
