import { css } from '@emotion/react'
import { cardHeaderClasses } from './CardHeader.classes'

export const CardHeaderStyles = css`
  .${cardHeaderClasses.root} {
    box-sizing: border-box;
    border: 1px solid rgb(var(--lsd-border-primary));
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .${cardHeaderClasses.large} {
    width: 600px;
    min-height: 40px;
    padding: 10px 18px;
  }

  .${cardHeaderClasses.medium} {
    width: 540px;
    min-height: 32px;
    padding: 6px 14px;
  }

  .${cardHeaderClasses.small} {
    width: 480px;
    min-height: 28px;
    padding: 6px 12px;
  }
`
