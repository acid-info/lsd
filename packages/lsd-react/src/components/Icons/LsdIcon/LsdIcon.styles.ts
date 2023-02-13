import { css } from '@emotion/react'
import { lsdIconClasses } from './LsdIcon.classes'

export const LsdIconStyles = css`
  .${lsdIconClasses.root} {
  }

  .${lsdIconClasses.primary} {
    &.${lsdIconClasses.filled} {
      &,
      * {
        fill: rgb(var(--lsd-icon-primary));
      }
    }

    $.${lsdIconClasses.stroked} {
      &,
      * {
        fill: rgb(var(--lsd-icon-primary));
      }
    }
  }

  .${lsdIconClasses.secondary} {
    &.${lsdIconClasses.filled} {
      &,
      * {
        fill: rgb(var(--lsd-icon-secondary));
      }
    }

    $.${lsdIconClasses.stroked} {
      &,
      * {
        fill: rgb(var(--lsd-icon-secondary));
      }
    }
  }
`
