import { css } from '@emotion/react'
import { cardItemClasses } from './Cardtem.classes'

export const CardItemStyles = css`
  .${cardItemClasses.root} {
    box-sizing: border-box;
    border: 1px solid rgb(var(--lsd-border-primary));
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .${cardItemClasses.large} {
    width: 600px;
    min-height: 40px;
    padding: 10px 18px;
  }

  .${cardItemClasses.medium} {
    width: 540px;
    min-height: 32px;
    padding: 6px 14px;
  }

  .${cardItemClasses.small} {
    width: 480px;
    min-height: 28px;
    padding: 6px 12px;
  }
`
