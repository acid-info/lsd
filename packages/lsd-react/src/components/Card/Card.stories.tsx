import { Meta, Story } from '@storybook/react'
import { CardBody } from '../CardBody'
import { CardHeader } from '../CardHeader'
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
      <CardHeader
        style={{
          padding: '10px 18px',
          border: '1px solid rgb(var(--lsd-border-primary))',
          borderBottom: 'none',
          textAlign: 'center',
          fontSize: '14px',
        }}
      >
        Title
      </CardHeader>
      <CardBody
        style={{
          padding: '14px 22px',
          fontSize: '16px',
          border: '1px solid rgb(var(--lsd-border-primary))',
        }}
      >
        A wise man can learn more from a foolish question than a fool can learn
        from a wise answer.
      </CardBody>
    </Card>
  </div>
)

Root.args = {
  size: 'large',
}
