import { css } from '@emotion/react'
import { tableHeaderClasses } from '../TableHeader/TableHeader.classes'
import { tableClasses } from './Table.classes'

export const TableStyles = css`
  .${tableClasses.root} {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .${tableClasses.root} > .${tableHeaderClasses.root} {
    margin-bottom: -1px;
  }

  .${tableClasses.large} {
  }

  .${tableClasses.medium} {
  }

  .${tableClasses.small} {
  }
`
