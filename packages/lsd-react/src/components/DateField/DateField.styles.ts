import { css } from '@emotion/react'
import { dateFieldClasses } from './DateField.classes'

export const DateFieldStyles = css`
  .${dateFieldClasses.root} {
    width: auto;
    border-bottom: 1px solid rgb(var(--lsd-border-primary));
    box-sizing: border-box;
  }

  .${dateFieldClasses.inputContainer} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .${dateFieldClasses.disabled} {
    opacity: 0.34;
  }

  .${dateFieldClasses.input} {
    border: none;
    outline: none;
    font-size: 14px;
    color: rgb(var(--lsd-text-primary));
    background: none;
    width: 100%;
  }

  .${dateFieldClasses.input}::-webkit-inner-spin-button,
    .${dateFieldClasses.input}::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }

  .${dateFieldClasses.input}:hover {
    outline: none;
  }

  .${dateFieldClasses.input}:focus::-webkit-datetime-edit {
    color: rgb(var(--lsd-text-primary));
    opacity: 0.3;
  }

  .${dateFieldClasses.error}
    .${dateFieldClasses.input}::-webkit-datetime-edit-fields-wrapper {
    text-decoration: line-through;
  }

  .${dateFieldClasses.supportingText} {
    width: fit-content;
    margin-top: 20px;
  }

  .${dateFieldClasses.large} {
    width: 208px;
    height: 40px;
    padding: 10px 14px;
  }

  .${dateFieldClasses.medium} {
    width: 188px;
    height: 32px;
    padding: 6px 12px;
  }

  .${dateFieldClasses.iconButton} {
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
`
