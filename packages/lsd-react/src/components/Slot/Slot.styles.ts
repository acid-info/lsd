import { css } from '@emotion/react'
import { slotClasses } from './Slot.classes'

export const SlotStyles = css`
  .${slotClasses.root} {
    color: rgb(var(--lsd-text-primary));
    background: none;
    border: 1px solid rgb(var(--lsd-border-primary));
    white-space: pre;
    text-align: center;
    padding: 8px 16px;
    box-sizing: border-box;
  }

  .${slotClasses.large} {
    width: 299px;
  }

  .${slotClasses.medium} {
    width: 270px;
  }

  .${slotClasses.small} {
    width: 235px;
  }

  .${slotClasses.text} {
    line-height: 16px;
  }

  .${slotClasses.textInline} {
    white-space: normal;
    text-align: left;
  }
`
