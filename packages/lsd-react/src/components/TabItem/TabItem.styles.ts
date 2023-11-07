import { css } from '@emotion/react'
import { tabItemClasses } from './TabItem.classes'

export const TabItemStyles = css`
  .${tabItemClasses.root} {
    background: rgb(var(--lsd-surface-primary));
    border: 1px solid transparent;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &:hover {
      text-decoration: underline;
    }

    &:not(${tabItemClasses.selected}) {
      border-bottom: 1px solid rgb(var(--lsd-border-primary));
    }

    box-sizing: border-box;
  }

  .${tabItemClasses.text} {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .${tabItemClasses.icon} {
    margin-left: 14px;
  }

  .${tabItemClasses.selected} {
    border: 1px solid rgb(var(--lsd-border-primary));

    &:hover {
      text-decoration: none;
    }
  }

  .${tabItemClasses.withIcon} {
    justify-content: space-between;
  }

  .${tabItemClasses.disabled} {
    cursor: default;
    opacity: 0.34;

    &:hover {
      text-decoration: none;
    }
  }

  .${tabItemClasses.small} {
    padding: 6px 12px;

    .${tabItemClasses.icon} {
      margin-left: 10px;
    }
  }

  .${tabItemClasses.medium} {
    padding: 6px 14px;

    .${tabItemClasses.icon} {
      margin-left: 12px;
    }
  }

  .${tabItemClasses.large} {
    padding: 10px 18px;

    .${tabItemClasses.icon} {
      margin-left: 14px;
    }
  }
`
