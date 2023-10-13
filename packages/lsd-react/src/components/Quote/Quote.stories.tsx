import { Meta, StoryObj } from '@storybook/react'
import { Quote, QuoteProps } from './Quote'

const subtitle = `Surface`
const description = `Quote component is used to display a quotation.`

export default {
  title: 'Quote',
  component: Quote,
  parameters: {
    componentSubtitle: subtitle,
    docs: {
      description: {
        component: description,
      },
    },
  },
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
