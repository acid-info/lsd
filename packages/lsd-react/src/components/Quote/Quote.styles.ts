import { css } from '@emotion/react'
import { quoteClasses } from './Quote.classes'

export const QuoteStyles = css`
  .${quoteClasses.root} {
    color: rgb(var(--lsd-text-primary));
    background: none;
    white-space: break-spaces;
    width: 600px;
  }

  .${quoteClasses.indentedInline} {
    border-left: 1px solid rgb(var(--lsd-border-primary));
    padding: 4px 8px 4px 28px;
  }

  .${quoteClasses.parentheses} {
    padding: 0px;
    text-align: center;
  }

  .${quoteClasses.text} {
    font-size: 16px;
    line-height: 24px;
  }
`
