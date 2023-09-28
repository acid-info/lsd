import clsx from 'clsx'
import React, { useRef, useState } from 'react'
import {
  dateToISODateString,
  removeDateTimezoneOffset,
} from '../../utils/date.utils'
import { useInput } from '../../utils/useInput'
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
    label?: React.ReactNode
    error?: boolean
    errorIcon?: boolean
    clearButton?: boolean
    disabled?: boolean
    withCalendar?: boolean
    supportingText?: string
    value?: string
    defaultValue?: string
    placeholder?: string
    size?: 'large' | 'medium' | 'small'
    variant?: 'outlined' | 'outlined-bottom'
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  }

export const DatePicker: React.FC<DatePickerProps> & {
  classes: typeof datePickerClasses
} = ({
  label,
  size = 'large',
  value: valueProp,
  onChange,
  withCalendar = true,
  variant = 'outlined-bottom',
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [openCalendar, setOpenCalendar] = useState(false)

  const input = useInput({
    value: valueProp,
    defaultValue: '',
    onChange,
    getInput: () =>
      ref.current?.querySelector(
        `input.${DateField.classes.input}`,
      ) as HTMLInputElement,
  })

  const handleDateChange = (date: Date) =>
    input.setValue(dateToISODateString(removeDateTimezoneOffset(date)))

  const inputId = (props.id || 'date-picker') + '-input'

  return (
    <div
      id={inputId}
      ref={ref}
      {...props}
      className={clsx(
        props.className,
        datePickerClasses.root,
        datePickerClasses[size],
      )}
    >
      <DateField
        label={label}
        size={size}
        variant={variant}
        icon={withCalendar && <CalendarIcon color="primary" />}
        onIconClick={() => setOpenCalendar((prev) => !prev)}
        value={input.value}
        onChange={input.onChange}
        {...props}
      >
        <Portal id="calendar">
          {withCalendar && (
            <Calendar
              onChange={(date) => handleDateChange(date)}
              open={openCalendar}
              onClose={() => setOpenCalendar(false)}
              handleRef={ref}
              value={input.value}
              disabled={props.disabled}
              className={datePickerClasses.calendar}
            />
          )}
        </Portal>
      </DateField>
    </div>
  )
}

DatePicker.classes = datePickerClasses