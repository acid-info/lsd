import { Meta, Story } from '@storybook/react'
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

export const Root: Story<QuoteProps> = (args) => <Quote {...args}>Quote</Quote>
Root.args = {
  text: 'A wise man can learn more from a foolish question than a fool can learn from a wise answer.',
  mode: 'indented-line',
}
