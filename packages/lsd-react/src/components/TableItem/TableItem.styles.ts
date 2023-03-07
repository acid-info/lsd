import { css } from '@emotion/react'
import { tableItemClasses } from './TableItem.classes'

export const TableItemStyles = css`
  .${tableItemClasses.root} {
    border: 1px solid rgb(var(--lsd-border-primary));
  }

  .${tableItemClasses.root}:has(> label) {
    width: 40px;
    input {
      position: relative;
      width: 14px;
      height: 14px;
      margin: auto;
    }
    span {
      margin-left: 14px !important;
    }
  }

  .${tableItemClasses.large} {
    padding: 10px;
  }

  .${tableItemClasses.medium} {
    padding: 6px 8px;
  }

  .${tableItemClasses.small} {
    padding: 6px;
  }
`
