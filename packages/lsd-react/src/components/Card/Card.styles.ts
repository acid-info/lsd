import { css } from '@emotion/react'
import { cardClasses } from './Card.classes'

export const CardStyles = css`
  .${cardClasses.root} {
    color: rgb(var(--lsd-text-primary));
    background: none;
    border: 1px solid rgb(var(--lsd-border-primary));
    word-break: keep-all;
    padding: 8px 16px;
    box-sizing: border-box;
  }

  .${cardClasses.large} {
    width: 600px;
    padding: 10px 18px;
  }

  .${cardClasses.medium} {
    width: 540px;
    padding: 6px 14px;
  }

  .${cardClasses.small} {
    width: 480px;
    padding: 6px 12px;
  }

  .${cardClasses.withHeader} {
    border-top: 1px solid transparent;
  }
`
