import { css } from '@emotion/react'
import { tableHeaderClasses } from './TableHeader.classes'

export const TableHeaderStyles = css`
  .${tableHeaderClasses.root} {
    box-sizing: border-box;
    border: 1px solid rgb(var(--lsd-border-primary));
  }
`
