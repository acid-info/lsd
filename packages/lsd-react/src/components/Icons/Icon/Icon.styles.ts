import { css } from '@emotion/react'
import { iconClasses } from './Icon.classes'

export const IconStyles = css`
  .${iconClasses.root} {
  }

  .${iconClasses.primary} {
    &.${iconClasses.filled} {
      &,
      * {
        fill: rgb(var(--icon-primary));
      }
    }

    $.${iconClasses.stroked} {
      &,
      * {
        fill: rgb(var(--icon-primary));
      }
    }
  }

  .${iconClasses.secondary} {
    &.${iconClasses.filled} {
      &,
      * {
        fill: rgb(var(--icon-secondary));
      }
    }

    $.${iconClasses.stroked} {
      &,
      * {
        fill: rgb(var(--icon-secondary));
      }
    }
  }
`
