import { css } from '@emotion/react'
import { dateRangePickerClasses } from './DateRangePicker.classes'
import { dateFieldClasses } from '../DateField/DateField.classes'

export const DateRangePickerStyles = css`
  .${dateRangePickerClasses.root} {
    box-sizing: border-box;

    /* Remove default outline styles from date fields. */
    .${dateFieldClasses.outlined} {
      border: none;
    }

    .${dateFieldClasses.icon} {
      padding: 8px;
    }
  }

  .${dateRangePickerClasses.label} {
    display: block;
  }

  .${dateRangePickerClasses.inputContainer} {
    box-sizing: border-box;

    display: flex;
    align-items: center;
    /* Outlined & non outlined versions must have same sizes - borders included. */
    border: 1px solid transparent;
  }

  .${dateRangePickerClasses.calendar} {
    border-top: none !important;
  }

  .${dateRangePickerClasses.openCalendar} {
    .${dateRangePickerClasses.inputContainer} {
      border-bottom: 1px solid rgb(var(--lsd-border-primary));
    }
  }

  .${dateRangePickerClasses.icon} {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    padding: 0 10px;
  }

  .${dateRangePickerClasses.disabled} {
    opacity: 0.3;
  }

  .${dateRangePickerClasses.supportingText} {
    position: absolute;
  }

  .${dateRangePickerClasses.large} {
    width: 318px;

    .${dateFieldClasses.large} {
      width: 156px;
    }

    .${dateFieldClasses.input} {
      padding-right: 0;
    }

    .${dateFieldClasses.icon} {
      padding: 11px 12px;
    }

    .${dateRangePickerClasses.label} {
      margin: 0 0 6px 18px;
    }

    .${dateRangePickerClasses.inputContainer} {
      height: 40px;
    }

    .${dateRangePickerClasses.supportingText} {
      margin: 6px 18px 0 18px;
    }
  }

  .${dateRangePickerClasses.medium} {
    width: 290px;

    .${dateFieldClasses.medium} {
      width: 142px;
    }

    .${dateFieldClasses.input} {
      padding-right: 0;
    }

    .${dateFieldClasses.icon} {
      padding: 7px 8px;
    }

    .${dateRangePickerClasses.label} {
      margin: 0 0 6px 14px;
    }

    .${dateRangePickerClasses.inputContainer} {
      height: 32px;
    }

    .${dateRangePickerClasses.supportingText} {
      margin: 6px 14px 0 14px;
    }
  }

  .${dateRangePickerClasses.small} {
    width: 262px;

    .${dateFieldClasses.small} {
      width: 128px;
    }

    .${dateFieldClasses.input} {
      padding-right: 0;
    }

    .${dateFieldClasses.icon} {
      padding: 5px 7px;
    }

    .${dateRangePickerClasses.label} {
      margin: 0 0 6px 12px;
    }

    .${dateRangePickerClasses.inputContainer} {
      height: 28px;
    }

    .${dateRangePickerClasses.supportingText} {
      margin: 6px 12px 0 12px;
    }
  }

  .${dateRangePickerClasses.separator} {
    margin-left: 3px;
    width: 1px;
    height: 100%;
  }

  .${dateRangePickerClasses.separator} {
    /* Outlined & non outlined versions must have same sizes - borders included. */
    border-left: 1px solid transparent;
  }

  .${dateRangePickerClasses.outlined} {
    border: 1px solid rgb(var(--lsd-border-primary));

    .${dateRangePickerClasses.separator} {
      border-left: 1px solid rgb(var(--lsd-border-primary));
    }
  }
`
