import { css } from '@emotion/react'
import { breadcrumbClasses } from '../Breadcrumb/Breadcrumb.classes'
import { breadcrumbItemClasses } from './BreadcrumbItem.classes'

export const BreadcrumbItemStyles = css`
  .${breadcrumbItemClasses.root} {
    list-style-type: none;
    display: flex;
    align-items: center;
  }

  .${breadcrumbClasses.list} > li:not(:last-child)::after {
    display: inline-block;
    margin-inline: 12px;
    content: '/';
  }

  .${breadcrumbItemClasses.itemLink} {
    text-decoration: none;
    cursor: pointer;
  }

  .${breadcrumbItemClasses.outlined} {
    padding: 3px 11px;
    border: 1px solid rgb(var(--lsd-border-primary));
  }

  ${breadcrumbItemClasses.large} {
  }

  ${breadcrumbItemClasses.small} {
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
`
