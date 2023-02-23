import { Meta, Story } from '@storybook/react'
import { Card, CardProps } from './Card'

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta

export const Root: Story<CardProps> = (args) => (
  <div style={{ width: 'fit-content' }}>
    <Card {...args}>
      <div
        style={{
          padding: '10px 18px',
          borderBottom: '1px solid rgb(var(--lsd-border-primary))',
          textAlign: 'center',
          fontSize: '14px',
        }}
      >
        Title
      </div>
      <div style={{ padding: '14px 22px', fontSize: '16px' }}>
        A wise man can learn more from a foolish question than a fool can learn
        from a wise answer.
      </div>
    </Card>
  </div>
)

Root.args = {
  size: 'large',
}
