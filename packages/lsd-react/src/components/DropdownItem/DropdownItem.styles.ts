import { css } from '@emotion/react'
import { dropdownItemClasses } from './DropdownItem.classes'

export const DropdownItemStyles = css`
  .${dropdownItemClasses.root} {
    width: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 10px 14px;
    border: 1px solid rgb(var(--lsd-border-primary));

    :not(.${dropdownItemClasses.disabled}) {
      cursor: pointer;

      &:hover,
      &:focus {
        outline: none;
        .${dropdownItemClasses.label} {
          text-decoration: underline;
        }
      }
    }
  }

  .${dropdownItemClasses.label} {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .${dropdownItemClasses.disabled} {
    opacity: 0.34;
  }

  .${dropdownItemClasses.icon} {
    margin-right: 18px;
  }

  .${dropdownItemClasses.small} {
    padding: 6px 10px;
  }

  .${dropdownItemClasses.medium} {
    padding: 6px 12px;
  }

  .${dropdownItemClasses.large} {
    padding: 10px 14px;
  }
`
