import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { Quote, QuoteProps } from './Quote'

export default {
  title: 'Quote',
  component: Quote,
  argTypes: {
    mode: {
      type: {
        name: 'enum',
        value: ['indented-line', 'parentheses'],
      },
    },
  },
} as Meta

export const Root: StoryObj<QuoteProps> = {
  render: (args) => (
    <div style={{ maxWidth: '600px' }}>
      <Quote {...args}>
        <div>
          A wise man can learn more from a foolish question than a fool can
          learn from a wise answer.
        </div>
      </Quote>
    </div>
  ),

  args: {
    mode: 'indented-line',
  },
}
