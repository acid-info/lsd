import clsx from 'clsx'
import React, { useRef, useState } from 'react'
import { Calendar } from '../Calendar'
import { DateField } from '../DateField'
import { CalendarIcon } from '../Icons'
import { Portal } from '../PortalProvider/Portal'
import { datePickerClasses } from './DatePicker.classes'

export type DatePickerProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onChange' | 'value'
> &
  Pick<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    error?: boolean
    errorIcon?: boolean
    clearButton?: boolean
    disabled?: boolean
    withCalendar?: boolean
    supportingText?: string
    value?: string
    onChange?: (value: string) => void
    defaultValue?: string
    placeholder?: string
    size?: 'large' | 'medium'
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  }

export const DatePicker: React.FC<DatePickerProps> & {
  classes: typeof datePickerClasses
} = ({ value, onChange, withCalendar = true, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [openCalendar, setOpenCalendar] = useState(false)
  const [date, setDate] = useState<string>(value || '')

  const handleDateFieldChange = (date: any) => {
    const offset = new Date(date).getTimezoneOffset()
    const formattedDate = new Date(date.getTime() - offset * 60 * 1000)
    const value = formattedDate.toISOString().split('T')[0]

    if (typeof onChange === 'function') {
      onChange(value)
    } else {
      setDate(value)
    }
  }

  return (
    <div
      ref={ref}
      className={clsx(
        props.className,
        datePickerClasses.root,
        withCalendar && datePickerClasses.withCalendar,
      )}
    >
      <DateField
        icon={withCalendar && <CalendarIcon color="primary" />}
        onIconClick={() => setOpenCalendar((prev) => !prev)}
        value={date}
        onChange={(data) => setDate(data.target.value)}
        style={{ width: '310px' }}
        {...props}
      >
        <Portal id="calendar">
          {withCalendar && (
            <Calendar
              handleDateFieldChange={handleDateFieldChange}
              open={openCalendar}
              onClose={() => setOpenCalendar(false)}
              handleRef={ref}
              value={date}
              disabled={props.disabled}
            />
          )}
        </Portal>
      </DateField>
    </div>
  )
}

DatePicker.classes = datePickerClasses
