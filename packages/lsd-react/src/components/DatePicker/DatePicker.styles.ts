import { css } from '@emotion/react'
import { datePickerClasses } from './DatePicker.classes'

export const DatePickerStyles = css`
  .${datePickerClasses.root} {
    width: fit-content;
  }

  .${datePickerClasses.calendar} {
    border-top: none !important;
  }
`
