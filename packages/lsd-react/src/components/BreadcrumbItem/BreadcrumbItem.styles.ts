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

  .${breadcrumbItemClasses.element} {
    list-style-type: none;
  }

  .${breadcrumbItemClasses.elementLink} {
    text-decoration: none;
    cursor: pointer;
  }

  .${breadcrumbItemClasses.elementCurrentPage} {
    border: 1px solid rgb(var(--lsd-border-primary));
    padding: 4px 12px;
  }

  .${breadcrumbClasses.root}:not(.${breadcrumbClasses.disabled}) {
    .${breadcrumbItemClasses.elementLink} {
      &:hover,
      &:focus {
        text-decoration: underline;
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
