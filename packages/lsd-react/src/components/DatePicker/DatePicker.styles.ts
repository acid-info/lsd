import { css } from '@emotion/react'
import { datePickerClasses } from './DatePicker.classes'

export const DatePickerStyles = css`
  .${datePickerClasses.root} {
    width: auto;
    border-bottom: 1px solid rgb(var(--lsd-border-primary));
    box-sizing: border-box;
  }

  .${datePickerClasses.inputContainer} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .${datePickerClasses.disabled} {
    opacity: 0.34;
  }

  .${datePickerClasses.input} {
    border: none;
    outline: none;
    font-size: 14px;
    color: rgb(var(--lsd-text-primary));
    background: none;
    width: 100%;
  }

  .${datePickerClasses.input}::-webkit-inner-spin-button,
    .${datePickerClasses.input}::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }

  .${datePickerClasses.input}:hover {
    outline: none;
  }

  .${datePickerClasses.input}:focus::-webkit-datetime-edit {
    color: rgb(var(--lsd-text-primary));
    opacity: 0.3;
  }

  .${datePickerClasses.error}
    .${datePickerClasses.input}::-webkit-datetime-edit-fields-wrapper {
    text-decoration: line-through;
  }

  .${datePickerClasses.supportingText} {
    width: fit-content;
    margin-top: 20px;
  }

  .${datePickerClasses.large} {
    width: 208px;
    height: 40px;
    padding: 10px 14px;
  }

  .${datePickerClasses.medium} {
    width: 188px;
    height: 32px;
    padding: 6px 12px;
  }

  .${datePickerClasses.clearButton} {
    padding: 0;
    width: auto;
    height: auto;
    margin: 0;
    border: 0;

    svg {
      width: 100%;
      height: auto;
    }
  }

  .${datePickerClasses.icon} {
  }
`
