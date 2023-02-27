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
  }

  .${calendarClasses.day} {
    cursor: pointer;
    border: none;
    background: transparent;
    aspect-ratio: 1 / 1;
  }

  .${calendarClasses.daySelected} {
    border: 1px solid rgb(var(--lsd-border-primary));
  }

  .${calendarClasses.dayDisabled} {
    opacity: 0.3;
    cursor: default;
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
