import { css } from '@emotion/react'
import { slotClasses } from '../Slot/Slot.classes'
import { collapseClasses } from './Collapse.classes'

export const CollapseStyles = css`
  .${collapseClasses.root} {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .${collapseClasses.open} {
    .${slotClasses.root} {
      border-top: 1px solid transparent;
    }
  }
`
