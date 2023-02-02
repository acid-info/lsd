import { css } from '@emotion/react'
import { withTheme } from '../Theme/withTheme'
import { buttonClasses } from './Button.classes'

export const ButtonStyles = withTheme(
  (theme) => css`
    .${buttonClasses.root} {
      width: auto;
      color: var(--lsd-text-primary);
      background: none;
      border: 1px solid var(--lsd-surface-primary);

      cursor: pointer;
      padding: 6px 24px;

      @media (max-width: ${theme.breakpoints.lg.width}px) {
        color: red;
        border-color: red;
      }
    }

    .${buttonClasses.disabled} {
      cursor: default;
      color: var(--lsd-surface-disabled);
      border-color: var(--lsd-surface-disabled);
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
  `,
)
