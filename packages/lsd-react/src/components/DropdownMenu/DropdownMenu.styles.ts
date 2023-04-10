import { css } from '@emotion/react'
import { dropdownMenuClasses } from './DropdownMenu.classes'

export const DropdownMenuStyles = css`
  .${dropdownMenuClasses.root} {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: rgb(var(--lsd-surface-primary));
    overflow: auto;
    border: 1px solid rgb(var(--lsd-border-primary));
    border-top: 0;
  }

  .${dropdownMenuClasses.open} {
    opacity: 1;
    visibility: visible;
  }

  .${dropdownMenuClasses.large} {
    max-height: 220px;
  }

  .${dropdownMenuClasses.medium} {
    max-height: 176px;
  }

  .${dropdownMenuClasses.small} {
    max-height: 154px;
  }
`
