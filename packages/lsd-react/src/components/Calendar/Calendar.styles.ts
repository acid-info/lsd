import { css } from '@emotion/react'
import { calendarClasses } from './Calendar.classes'

export const CalendarStyles = css`
  .${calendarClasses.root} {
    border: 1px solid rgb(var(--lsd-border-primary));
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: rgb(var(--lsd-surface-primary));
  }

  .${calendarClasses.container} {
    display: grid;
    margin: 8px 2px 2px;
    grid-gap: 0 64px;
  }

  .${calendarClasses.open} {
    opacity: 1;
    visibility: visible;
  }

  .${calendarClasses.header} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 10px;
    padding-bottom: 10px;
  }

  .${calendarClasses.grid} {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-content: center;
    cursor: pointer;
  }

  .${calendarClasses.weekDay} {
    text-align: center;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .${calendarClasses.row} {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .${calendarClasses.changeYear} {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(var(--lsd-border-primary));
    padding: 2px 6px;
    gap: 6px;
  }

  .${calendarClasses.changeYearButton} {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    height: 14px;
    width: 14px;
    padding: 0;
  }

  .${calendarClasses.month} {
    margin-right: 8px;
  }

  .${calendarClasses.year}:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: rgb(var(--lsd-border-primary));
  }

  .${calendarClasses.day} {
    cursor: pointer;
    border: none;
    background: transparent;
    aspect-ratio: 1 / 1;
    position: relative;
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
  }
`
