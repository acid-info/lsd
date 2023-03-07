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

    table tr:first-child td label:has(input[type='radio']) {
      display: none;
    }
  }

  .${tableBodyClasses.toolbar} {
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid rgb(var(--lsd-border-primary));
    border-bottom: none;
    display: flex;
    justify-content: space-between;
  }

  .${tableBodyClasses.buttons} {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .${tableBodyClasses.button} {
    height: 28px;
    background: rgb(var(--lsd-border-primary));
    color: rgb(var(--lsd-icon-secondary));
  }

  .${tableBodyClasses.container} {
    display: table;
    width: 100%;
    /* display: inline-grid;
    grid-template-columns: auto auto auto auto; */

    /* tr,
    td {
      border: 1px solid rgb(var(--lsd-border-primary));
    } */
  }
`
