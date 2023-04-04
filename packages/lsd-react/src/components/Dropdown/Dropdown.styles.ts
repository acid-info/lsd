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

  .${dropdownClasses.trigger} {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px 10px 18px;

    cursor: pointer;
    background: none;
    border: 1px solid rgb(var(--lsd-border-primary));

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
    min-width: 60px;
  }

  .${dropdownClasses.triggerIcon} {
    margin-right: 8px;
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
    .${dropdownClasses.trigger} {
      opacity: 0.34;
      cursor: initial;
    }
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

  .${dropdownClasses.small} {
    .${dropdownClasses.trigger} {
      padding: 6px 10px;
    }
  }

  .${dropdownClasses.medium} {
    .${dropdownClasses.trigger} {
      padding: 6px 12px;
    }
  }

  .${dropdownClasses.bottomOutline} {
    .${dropdownClasses.trigger} {
      border-top: none;
      border-left: none;
      border-right: none;
    }
  }
`
