import { css } from '@emotion/react'
import { tagClasses } from './Tag.classes'

export const TagStyles = css`
  .${tagClasses.root} {
    width: fit-content;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 1px solid rgb(var(--lsd-icon-primary));

    &:hover,
    &:focus {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .${tagClasses.large} {
    padding: 4px 12px;
    gap: 12px;
    height: 28px;
  }

  .${tagClasses.small} {
    padding: 4px 8px;
    gap: 8px;
    height: 24px;
  }

  .${tagClasses.filled} {
    background-color: rgb(var(--lsd-icon-primary));
    .${tagClasses.label} {
      color: rgb(var(--lsd-text-secondary));
    }

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
