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
        <Calendar
          {...arg}
          open={true}
          handleRef={ref as React.RefObject<HTMLElement>}
        >
          Calendar
        </Calendar>
      </div>
    )
  },
}

export const Controlled: StoryObj<CalendarProps> = {
  render: (arg) => {
    const ref = useRef<HTMLDivElement>(null)

    return (
      <div ref={ref} style={{ width: '300px' }}>
        <Calendar
          {...arg}
          open={true}
          handleRef={ref as React.RefObject<HTMLElement>}
        >
          Calendar
        </Calendar>
      </div>
    )
  },
}

Uncontrolled.args = {
  startDate: undefined,
  onStartDateChange: undefined,
  size: 'large',
}

Controlled.args = {
  startDate: '2023-01-01',
  onStartDateChange: undefined,
  size: 'large',
}
