import { css } from '@emotion/react'
import { breadcrumbClasses } from '../Breadcrumb/Breadcrumb.classes'
import { breadcrumbItemClasses } from './BreadcrumbItem.classes'

export const BreadcrumbItemStyles = css`
  .${breadcrumbItemClasses.root} {
    list-style-type: none;
  }

  .${breadcrumbClasses.list} li + li::before {
    display: inline-block;
    margin-inline: 10px;
    content: '/';
  }

  .${breadcrumbItemClasses.itemLink} {
    text-decoration: none;
    cursor: pointer;
  }

  .${breadcrumbItemClasses.itemCurrentPage} {
    border: 1px solid rgb(var(--lsd-border-primary));
    padding: 4px 12px;
  }

  .${breadcrumbClasses.root}:not(.${breadcrumbClasses.disabled}) {
    .${breadcrumbItemClasses.itemLink} {
      &:hover,
      &:focus {
        text-decoration: underline;
        text-decoration-color: rgb(var(--lsd-border-primary));
      }
    }
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
