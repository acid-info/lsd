import { css } from '@emotion/react'
import { tagClasses } from './Tag.classes'

export const TagStyles = css`
  .${tagClasses.root} {
    width: fit-content;
    height: 28px;
    padding: 4px 12px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;

    border: 1px solid rgb(var(--lsd-icon-primary));

    &:hover,
    &:focus {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .${tagClasses.filled} {
    background-color: rgb(var(--lsd-icon-primary));
    color: rgb(var(--lsd-text-secondary));
    svg {
      --lsd-icon-primary: var(--lsd-icon-secondary);
    }
  }

  .${tagClasses.outlined} {
    color: rgb(var(--lsd-text-primary));
  }

  .${tagClasses.disabled} {
    opacity: 0.3;
    cursor: initial;
    pointer-events: none;
  }
`
