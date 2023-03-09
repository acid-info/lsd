import { css } from '@emotion/react'
import { listBoxClasses } from './ListBox.classes'

export const ListBoxStyles = css`
  .${listBoxClasses.root} {
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

  .${listBoxClasses.open} {
    opacity: 1;
    visibility: visible;
  }
`
