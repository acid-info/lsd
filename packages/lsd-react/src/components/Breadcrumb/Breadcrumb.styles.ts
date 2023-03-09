import { css } from '@emotion/react'
import { breadcrumbClasses } from './Breadcrumb.classes'

export const BreadcrumbStyles = css`
  .${breadcrumbClasses.root} {
  }

  .${breadcrumbClasses.list} {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .${breadcrumbClasses.disabled} {
    .${breadcrumbClasses.list} {
      opacity: 0.34;
      cursor: initial;
      pointer-events: none;
    }
  }

  .${breadcrumbClasses.listBox} {
    display: flex;
    flex-direction: column;
    max-height: 400px;
    overflow: auto;
    border: 1px solid rgb(var(--lsd-border-primary));
    margin-top: 10px;
    margin-left: 20px;
    position: absolute;
    width: auto !important;
  }

  .${breadcrumbClasses.listBox} > li {
    &:not(:last-child) {
      border-bottom: 1px solid rgb(var(--lsd-border-primary));
    }
    padding: 6px 10px 6px 12px;
    cursor: pointer;
    &:hover,
    &:focus {
      text-decoration: underline;
      text-decoration-color: rgb(var(--lsd-border-primary));
    }
  }
`
