import { css } from '@emotion/react'
import { dateFieldClasses } from '../DateField/DateField.classes'
import { rangePickerClasses } from './RangePicker.classes'

export const RangePickerStyles = css`
  .${rangePickerClasses.root} {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .${rangePickerClasses.open} {
    border-bottom: 1px solid rgb(var(--lsd-border-primary));
  }

  .${rangePickerClasses.open} .${dateFieldClasses.root} {
    border-bottom: none;
  }
`
