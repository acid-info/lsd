import { css } from '@emotion/react'
import { calendarClasses } from './Calendar.classes'

export const CalendarStyles = css`
  .${calendarClasses.root} {
    border: 1px solid rgb(var(--lsd-border-primary));
    visibility: hidden;
    position: absolute !important;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: rgb(var(--lsd-surface-primary));

    user-select: none;
  }

  .${calendarClasses.container} {
    display: flex;
    flex-direction: column;
    padding: 8px;
  }

  .${calendarClasses.open} {
    opacity: 1;
    visibility: visible;
  }

  .${calendarClasses.header} {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    margin-bottom: 8px;
  }

  .${calendarClasses.weekDay} {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1;
    margin-bottom: 4px;
  }

  .${calendarClasses.changeYear} {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 0xp 2px 8px;
    gap: 6px;

    /* The transparent border prevents slight layout shifts when the hover border shows up. */
    border: 1px solid transparent;
  }

  .${calendarClasses.changeYearActive} {
    .${calendarClasses.year} {
      padding: 5px 0px 5px 10px;
    }

    .${calendarClasses.yearAndIcon} {
      border: 1px solid rgb(var(--lsd-border-primary));
    }

    .${calendarClasses.changeYearIconContainer} {
      padding-right: 5px;
    }
  }

  .${calendarClasses.changeYearIconContainer} {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    width: 14px;
    padding-left: 5px;
  }

  .${calendarClasses.month} {
    margin-right: 8px;
  }

  .${calendarClasses.monthAndYear} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .${calendarClasses.dayContainer} {
    cursor: pointer;
    background: transparent;

    position: relative;
    box-sizing: border-box;

    /* Prevents layout shifts when we add borders to the days */
    border: 1px solid transparent;
  }

  .${calendarClasses.day} {
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .${calendarClasses.day}:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: rgb(var(--lsd-border-primary));
  }

  .${calendarClasses.day} label:hover {
    cursor: pointer;
  }

  .${calendarClasses.daySelected} {
    border: 1px solid rgb(var(--lsd-border-primary));
  }

  .${calendarClasses.dayDisabled} {
    opacity: 0.3;
    cursor: default;
  }

  .${calendarClasses.todayIndicator} {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2px;
  }

  .${calendarClasses.disabled} {
    pointer-events: none;
    border: 1px solid rgba(var(--lsd-border-primary), 0.3);
    label {
      opacity: 0.3;
    }
    .${calendarClasses.button} {
      opacity: 0.3;
    }
    .${calendarClasses.daySelected} {
      opacity: 0.3;
    }
  }

  .${calendarClasses.button} {
    border: 1px solid rgb(var(--lsd-border-primary));
    cursor: pointer;
    background: transparent;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
  }

  .${calendarClasses.nextMonthButton} {
    top: 8px;
    right: 8px;
  }

  .${calendarClasses.previousMonthButton} {
    top: 8px;
    left: 8px;
  }

  /* Using style double instead of solid. When collapsing borders, */
  /* this prevents the transparent borders from overriding the other borders. */
  /* This happens because the 'double' style is more specific than the 'solid' style */
  .${calendarClasses.dayBorderLeft} {
    border-left: 1px double rgb(var(--lsd-border-primary));
  }

  .${calendarClasses.dayBorderRight} {
    border-right: 1px double rgb(var(--lsd-border-primary));
  }

  .${calendarClasses.dayBorderLeftAndRight} {
    border-left: 1px double rgb(var(--lsd-border-primary));
    border-right: 1px double rgb(var(--lsd-border-primary));
  }

  .${calendarClasses.dayBorderTopAndBottom} {
    border-top: 1px double rgb(var(--lsd-border-primary));
    border-bottom: 1px double rgb(var(--lsd-border-primary));
  }

  .${calendarClasses.monthTable} {
    border-collapse: collapse;
  }

  .${calendarClasses.yearDropdown} {
    box-sizing: border-box;

    position: absolute;
    top: 100%;
    left: 0;

    max-height: 200px;
    overflow-y: auto;
    width: 100%;

    border: 1px solid rgb(var(--lsd-border-primary));
    z-index: 1;

    .${calendarClasses.year} {
      border-bottom: 1px solid rgb(var(--lsd-border-primary));
    }
  }

  .${calendarClasses.year} {
    display: flex;
    cursor: pointer;
    transition: background-color 0.2s;
    align-items: center;

    background: rgb(var(--lsd-surface-primary));

    :hover {
      text-decoration: underline;
      padding: 5px 0px 5px 10px;
    }
  }

  .${calendarClasses.yearAndIcon}:hover {
    border: 1px solid rgb(var(--lsd-border-primary));

    .${calendarClasses.changeYearIconContainer} {
      padding-right: 5px;
    }
  }
`
