import { StoryObj, Meta } from '@storybook/react'
import { TooltipBase, TooltipBaseProps } from './TooltipBase'

export default {
  title: 'TooltipBase',
  component: TooltipBase,
  argTypes: {
    arrowPosition: {
      type: {
        name: 'enum',
        value: ['top', 'bottom', 'left', 'right'],
      },
    },
  },
} as Meta

export const Root: StoryObj<TooltipBaseProps> = ({
  ...args
}: TooltipBaseProps) => {
  return <TooltipBase {...args} style={{ height: 200, width: 200 }} />
}

Root.args = {
  arrowPosition: 'top',
  arrowOffset: 50,
  arrowSize: 10,
}
