import { css } from '@emotion/react'
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
        .${dropdownClasses.optionLabel} {
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

  .${dropdownClasses.optionLabel} {
    cursor: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .${dropdownClasses.icons} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .${dropdownClasses.icon} {
    display: flex;
    align-items: center;
  }

  .${dropdownClasses.menuIcon} {
  }

  .${dropdownClasses.supportingText} {
    margin: 6px 14px;
  }

  .${dropdownClasses.error} {
    .${dropdownClasses.optionLabel} {
      text-decoration: line-through;
    }
  }

  .${dropdownClasses.disabled} {
    opacity: 0.34;
    cursor: initial;
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
      padding: 10px 0px 10px 18px;
    }

    .${dropdownClasses.icons} {
      width: 42px;
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
      padding: 6px 0px 6px 14px;
    }

    .${dropdownClasses.icons} {
      width: 38px;
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
      padding: 6px 0px 6px 12px;
    }

    .${dropdownClasses.icons} {
      width: 34px;
    }
  }

  .${dropdownClasses.outlined} {
    .${dropdownClasses.buttonContainer} {
      border: 1px solid rgb(var(--lsd-border-primary));
    }
  }

  .${dropdownClasses.underlined} {
    .${dropdownClasses.buttonContainer} {
      border: 1px solid transparent;
      border-bottom: 1px solid rgb(var(--lsd-border-primary));
    }
  }
`
