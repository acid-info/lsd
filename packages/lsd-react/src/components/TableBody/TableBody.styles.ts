import { css } from '@emotion/react'
import { tableBodyClasses } from './TableBody.classes'

export const TableBodyStyles = css`
  .${tableBodyClasses.root} {
    table {
      border-collapse: collapse;
      text-align: center;
      table-layout: fixed;
      width: 100%;
      height: auto;
    }

    table tr:first-of-type td label:has(input[type='radio']) {
      display: none;
    }
  }

  .${tableBodyClasses.toolbar} {
    box-sizing: border-box;
    padding: 15px;
    border: 1px solid rgb(var(--lsd-border-primary));
    border-bottom: none;
    display: flex;
    justify-content: space-between;
  }
`
