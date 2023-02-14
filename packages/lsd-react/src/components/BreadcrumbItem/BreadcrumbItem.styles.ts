import { css } from '@emotion/react'
import { breadcrumbClasses } from '../Breadcrumb/Breadcrumb.classes'
import { breadcrumbItemClasses } from './BreadcrumbItem.classes'

export const BreadcrumbItemStyles = css`
  .${breadcrumbItemClasses.root} {
  }

  .${breadcrumbClasses.list} li + li::before {
    display: inline-block;
    margin-inline: 10px;
    content: '/';
  }

  .${breadcrumbItemClasses.listElement} {
    list-style-type: none;
  }

  .${breadcrumbItemClasses.listElementLink} {
    text-decoration: none;
    cursor: pointer;
  }

  .${breadcrumbItemClasses.listElementCurrentPage} {
    border: 1px solid #000000;
    padding: 4px 12px;
  }

  .${breadcrumbClasses.root}:not(.${breadcrumbClasses.disabled}) {
    .${breadcrumbItemClasses.listElementLink} {
      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }

  .${breadcrumbItemClasses.label} {
  }

  .${breadcrumbItemClasses.disabled} {
    opacity: 0.34;
  }

  .${breadcrumbItemClasses.small} {
    padding: 6px 10px;
  }

  .${breadcrumbItemClasses.medium} {
    padding: 6px 12px;
  }

  .${breadcrumbItemClasses.large} {
    padding: 10px 14px;
  }
`
