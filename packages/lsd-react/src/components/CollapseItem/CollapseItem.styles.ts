import { css } from '@emotion/react'
import { collapseItemClasses } from './CollapseItem.classes'

export const CollapseItemStyles = css`
  .${collapseItemClasses.root} {
    box-sizing: border-box;
  }

  .${collapseItemClasses.root}:not(.${collapseItemClasses.disabled}) {
    .${collapseItemClasses.trigger} {
      &:hover {
        .${collapseItemClasses.triggerLabel} {
          text-decoration: underline;
        }
      }
    }
  }

  .${collapseItemClasses.trigger} {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px 10px 18px;

    cursor: pointer;
    background: none;
    border: 1px solid rgb(var(--lsd-border-primary));

    &:focus {
      outline: none;
    }
  }

  .${collapseItemClasses.triggerLabel} {
    cursor: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: auto;
  }

  .${collapseItemClasses.triggerIcons} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }

  .${collapseItemClasses.triggerIcon} {
    margin-right: 8px;
  }

  .${collapseItemClasses.triggerMenuIcon} {
  }

  .${collapseItemClasses.disabled} {
    .${collapseItemClasses.trigger} {
      opacity: 0.34;
      cursor: initial;
    }
  }

  .${collapseItemClasses.large} {
    .${collapseItemClasses.trigger} {
      width: 299px;
      height: 40px;
      padding: 10px 18px;
    }
  }

  .${collapseItemClasses.medium} {
    .${collapseItemClasses.trigger} {
      width: 270px;
      height: 32px;
      padding: 6px 14px;
    }
  }

  .${collapseItemClasses.small} {
    .${collapseItemClasses.trigger} {
      width: 235px;
      height: 28px;
      padding: 6px 12px;
    }
  }
`
