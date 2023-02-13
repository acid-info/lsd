import { css } from '@emotion/react'
import { buttonClasses } from './Button.classes'

export const ButtonStyles = css`
  .${buttonClasses.root} {
    width: auto;
    color: rgb(var(--lsd-text-primary));
    background: none;
    border: 1px solid rgb(var(--lsd-border-primary));

    cursor: pointer;
    padding: 6px 24px;
  }

  .${buttonClasses.disabled} {
    cursor: default;
    opacity: 0.34;
  }

  .${buttonClasses.large} {
    padding: 10px 40px;
  }

  .${buttonClasses.medium} {
  }

  .${buttonClasses.small} {
    padding: 6px 12px;
  }

  .${buttonClasses.root}:hover {
    &:not(.${buttonClasses.disabled}) {
      .${buttonClasses.text} {
        text-decoration: underline;
      }
    }
  }
`
