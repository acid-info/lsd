import { css } from '@emotion/react'
import { calendarClasses } from '../Calendar/Calendar.classes'
import { datePickerClasses } from './DatePicker.classes'

export const DatePickerStyles = css`
  .${datePickerClasses.root} {
    width: fit-content;
  }

  #lsd-presentation .${calendarClasses.root} {
    border-top: none;
  }
`
