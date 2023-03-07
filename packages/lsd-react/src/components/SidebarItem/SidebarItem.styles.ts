import { css } from '@emotion/react'
import { sidebarItemClasses } from './SidebarItem.classes'

export const SidebarItemStyles = css`
  .${sidebarItemClasses.root} > a {
    width: fit-content;
    height: 28px;
    padding: 6px 14px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;

    &:hover,
    &:focus {
      text-decoration: underline;
      text-decoration-color: rgb(var(--lsd-text-primary));
      cursor: pointer;
    }
  }

  .${sidebarItemClasses.disabled} {
    opacity: 0.3;
    cursor: initial;
    pointer-events: none;
  }

  .${sidebarItemClasses.text} {
    width: 256px;
  }
`
