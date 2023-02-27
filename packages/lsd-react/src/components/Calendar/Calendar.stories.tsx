import { Meta, Story } from '@storybook/react'
import { useRef, useState } from 'react'
import { Calendar, CalendarProps } from './Calendar'

export default {
  title: 'Calendar',
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
  value: '',
}
