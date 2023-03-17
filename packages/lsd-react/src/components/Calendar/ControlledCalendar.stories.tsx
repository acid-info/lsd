import { Meta, Story } from '@storybook/react'
import { useRef } from 'react'
import { Calendar, CalendarProps } from './Calendar'

export default {
  title: 'ControlledCalendar',
  component: Calendar,
} as Meta

export const Root: Story<CalendarProps> = (arg) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div ref={ref} style={{ width: '300px' }}>
      <Calendar
        {...arg}
        handleDateFieldChange={(date) => console.log(date?.toDateString())}
        open={true}
        handleRef={ref}
      >
        Calendar
      </Calendar>
    </div>
  )
}

Root.args = {
  value: '2023-01-01',
  onChange: undefined,
}
