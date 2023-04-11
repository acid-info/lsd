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
    overflow: auto;
    border: 1px solid rgb(var(--lsd-border-primary));
    margin-top: 10px;
    position: absolute;
    width: auto !important;
  }

  .${breadcrumbClasses.listBox} > li {
    &:not(:last-child) {
      border-bottom: 1px solid rgb(var(--lsd-border-primary));
    }

    cursor: pointer;
    &:hover,
    &:focus {
      text-decoration: underline;
      text-decoration-color: rgb(var(--lsd-border-primary));
    }
  }

  .${breadcrumbClasses.listBox} li > a {
    width: 164px;
    padding: 5px 11px;
  }
`
