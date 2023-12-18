import { css } from '@emotion/react'
import { buttonClasses } from './Button.classes'

export const ButtonStyles = css`
  .${buttonClasses.root} {
    width: auto;

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
    padding: 6px 24px;
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

  .${buttonClasses.withIcon} {
    display: flex;
    align-items: center;
  }

  .${buttonClasses.icon} {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
  }

  .${buttonClasses.large}.${buttonClasses.withIcon} {
    padding: 10px 0px 10px 18px;
    .${buttonClasses.icon} {
      width: 42px;
    }
  }

  .${buttonClasses.medium}.${buttonClasses.withIcon} {
    padding: 6px 0px 6px 14px;
    .${buttonClasses.icon} {
      width: 38px;
    }
  }

  .${buttonClasses.small}.${buttonClasses.withIcon} {
    padding: 6px 0px 6px 12px;
    .${buttonClasses.icon} {
      width: 34px;
    }
  }

  .${buttonClasses.outlined} {
    background: none;
    border: 1px solid rgb(var(--lsd-border-primary));

    .${buttonClasses.text} {
      color: rgb(var(--lsd-text-primary));
    }
  }

  .${buttonClasses.filled} {
    background: rgb(var(--lsd-surface-secondary));
    border: 1px solid rgb(var(--lsd-border-primary));

    .${buttonClasses.text} {
      color: rgb(var(--lsd-text-secondary));
    }
  }
`
