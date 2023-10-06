import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { useRef } from 'react'
import { Calendar, CalendarProps } from './Calendar'

export default {
  title: 'Calendar',
  component: Calendar,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
      defaultValue: 'large',
    },
  },
} as Meta

export const Uncontrolled: StoryObj<CalendarProps> = {
  render: (arg) => {
    const ref = useRef<HTMLDivElement>(null)

    return (
      <div ref={ref} style={{ width: '300px' }}>
        <Calendar {...arg} open={true} handleRef={ref}>
          Calendar
        </Calendar>
      </div>
    )
  },

  args: {
    value: undefined,
    onChange: undefined,
    size: 'large',
  },
}

export const Controlled: StoryObj<CalendarProps> = {
  render: (arg) => {
    const ref = useRef<HTMLDivElement>(null)

    return (
      <div ref={ref} style={{ width: '300px' }}>
        <Calendar {...arg} open={true} handleRef={ref}>
          Calendar
        </Calendar>
      </div>
    )
  },

  args: {
    value: '2023-01-01',
    onChange: undefined,
    size: 'large',
  },
}
