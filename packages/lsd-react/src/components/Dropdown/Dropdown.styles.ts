import { css } from '@emotion/react'
import { dropdownItemClasses } from '../DropdownItem/DropdownItem.classes'
import { dropdownClasses } from './Dropdown.classes'

export const DropdownStyles = css`
  .${dropdownClasses.root} {
  }

  .${dropdownClasses.root}:not(.${dropdownClasses.disabled}):not(
      .${dropdownClasses.error}
    ) {
    .${dropdownClasses.trigger} {
      &:hover,
      &:focus {
        .${dropdownClasses.triggerLabel} {
          text-decoration: underline;
        }
      }
    }
  }

  .${dropdownClasses.label} {
    display: block;
  }

  .${dropdownClasses.buttonContainer} {
    display: flex;
    justify-content: space-between;
  }

  .${dropdownClasses.trigger} {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: none;

    cursor: pointer;
    background: none;

    &:focus {
      outline: none;
    }
  }

  .${dropdownClasses.triggerLabel} {
    cursor: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .${dropdownClasses.triggerIcons} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
  }

  .${dropdownClasses.triggerIcon} {
    display: flex;
    align-items: center;
  }

  .${dropdownClasses.triggerMenuIcon} {
  }

  .${dropdownClasses.supportingText} {
    margin: 6px 14px;
  }

  .${dropdownClasses.error} {
    .${dropdownClasses.triggerLabel} {
      text-decoration: line-through;
    }
  }

  .${dropdownClasses.disabled} {
    opacity: 0.34;
    cursor: initial;
  }

  .${dropdownClasses.listBox} {
    max-height: 400px;
    overflow: auto;
    border: 1px solid rgb(var(--lsd-border-primary));
    border-top: 0;

    & .${dropdownItemClasses.root} {
      border: 0;

      &:not(:last-child) {
        border-bottom: 1px solid rgb(var(--lsd-border-primary));
      }
    }
  }

  .${dropdownClasses.large} {
    width: 208px;

    .${dropdownClasses.label} {
      margin: 0 0 6px 18px;
    }

    .${dropdownClasses.buttonContainer} {
      height: 40px;
    }

    .${dropdownClasses.trigger} {
      padding: 9px 17px;
    }
  }

  .${dropdownClasses.medium} {
    width: 188px;

    .${dropdownClasses.label} {
      margin: 0 0 6px 14px;
    }

    .${dropdownClasses.buttonContainer} {
      height: 32px;
    }

    .${dropdownClasses.trigger} {
      padding: 5px 13px;
    }
  }

  .${dropdownClasses.small} {
    width: 164px;

    .${dropdownClasses.label} {
      margin: 0 0 6px 12px;
    }

    .${dropdownClasses.buttonContainer} {
      height: 28px;
    }

    .${dropdownClasses.trigger} {
      padding: 5px 11px;
    }
  }

  .${dropdownClasses.outlined} {
    .${dropdownClasses.buttonContainer} {
      border: 1px solid rgb(var(--lsd-border-primary));
    }
  }

  .${dropdownClasses.outlinedBottom} {
    .${dropdownClasses.buttonContainer} {
      border-bottom: 1px solid rgb(var(--lsd-border-primary));
    }
  }
`
