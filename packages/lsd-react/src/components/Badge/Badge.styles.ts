import { badgeClasses } from './Badge.classes'

export const BadgeStyles = `
  .${badgeClasses.root} {
    width: fit-content;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 1px solid rgb(var(--lsd-icon-primary));
    border-radius: 20px;

    &:hover,
    &:focus {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .${badgeClasses.large} {
    padding: 3px 11px;
    gap: 12px;
    height: 28px;
  }

  .${badgeClasses.small} {
    padding: 3px 7px;
    gap: 8px;
    height: 24px;
  }

  .${badgeClasses.filled} {
    background-color: rgb(var(--lsd-icon-primary));
    .${badgeClasses.label} {
      color: rgb(var(--lsd-text-secondary));
    }

    svg {
      --lsd-icon-primary: var(--lsd-icon-secondary);
    }
  }

  .${badgeClasses.outlined} {
    color: rgb(var(--lsd-text-primary));
  }

  .${badgeClasses.disabled} {
    opacity: 0.3;
    cursor: initial;
    pointer-events: none;
  }
`
