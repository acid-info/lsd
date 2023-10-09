import { css } from '@emotion/react'
import { dateFieldClasses } from './DateField.classes'

export const DateFieldStyles = css`
  .${dateFieldClasses.root} {
    width: auto;
    box-sizing: border-box;
  }

  .${dateFieldClasses.label} {
    display: block;
  }

  .${dateFieldClasses.icon} {
    position: absolute;
    right: 0;

    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: rgb(var(--lsd-surface-primary));
  }

  .${dateFieldClasses.icon}:focus {
    background: blue;
    background-color: pink;
    border: 1px solid rgb(var(--lsd-border-primary));
  }

  .${dateFieldClasses.noIcon} {
    position: absolute;
    right: 0;
    background-color: rgb(var(--lsd-surface-primary));
    padding: 12px;
  }

  .${dateFieldClasses.outlined} {
    border: 1px solid rgb(var(--lsd-border-primary));
  }

  .${dateFieldClasses.underlined} {
    border-bottom: 1px solid rgb(var(--lsd-border-primary));
  }

  .${dateFieldClasses.inputContainer} {
    // Position relative allows the icons to be absolute positioned...
    // ... and the icons should be absolute positioned to be on top of the browser's default icons.
    position: relative;
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
    opacity: 0.4;
    transition: opacity 0.2s ease-in-out;
  }

  .${dateFieldClasses.input}::-webkit-inner-spin-button,
    .${dateFieldClasses.input}::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }

  .${dateFieldClasses.input}:hover {
    outline: none;
  }

  .${dateFieldClasses.supportingText} {
    position: absolute;
  }

  .${dateFieldClasses.large} {
    width: 208px;

    .${dateFieldClasses.label} {
      margin: 0 0 6px 18px;
    }
    .${dateFieldClasses.inputContainer} {
      height: 40px;
    }
    .${dateFieldClasses.input} {
      padding: 9px 0px 9px 17px;
    }
    .${dateFieldClasses.icon} {
      padding: 12px 13px;
    }
    .${dateFieldClasses.supportingText} {
      margin: 6px 18px 0 18px;
    }
  }

  .${dateFieldClasses.medium} {
    width: 188px;

    .${dateFieldClasses.label} {
      margin: 0 0 6px 14px;
    }
    .${dateFieldClasses.inputContainer} {
      height: 32px;
    }
    .${dateFieldClasses.input} {
      padding: 5px 11px 5px 13px;
    }
    .${dateFieldClasses.icon} {
      padding: 8px 11px;
    }
    .${dateFieldClasses.supportingText} {
      margin: 6px 14px 0 14px;
    }
  }

  .${dateFieldClasses.small} {
    width: 164px;

    .${dateFieldClasses.label} {
      margin: 0 0 6px 12px;
    }
    .${dateFieldClasses.inputContainer} {
      height: 28px;
    }
    .${dateFieldClasses.input} {
      padding: 5px 9px 5px 11px;
      font-size: 12px;
    }
    .${dateFieldClasses.icon} {
      padding: 6px 9px;
    }
    .${dateFieldClasses.supportingText} {
      margin: 6px 12px 0 12px;
    }
  }

  .${dateFieldClasses.input}:invalid, .${dateFieldClasses.inputFilled} {
    color: rgb(var(--lsd-border-primary));
    opacity: 1;
  }

  .${dateFieldClasses.error}
    .${dateFieldClasses.input}::-webkit-datetime-edit-year-field,
    .${dateFieldClasses.error}
    .${dateFieldClasses.input}::-webkit-datetime-edit-month-field,
    .${dateFieldClasses.error}
    .${dateFieldClasses.input}::-webkit-datetime-edit-day-field {
    text-decoration: line-through;
  }

  /* If browser does not support ::-webkit-datetime pseudo elements, use the following. */
  @supports not selector(::-webkit-datetime-edit-day-field) {
    .${dateFieldClasses.error} .${dateFieldClasses.input} {
      text-decoration: line-through;
    }
  }
`
