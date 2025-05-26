import { dropdownItemClasses } from './DropdownItem.classes'

export const DropdownItemStyles = `
  .${dropdownItemClasses.root} {
    width: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;

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
    flex-shrink: 0;
  }

  .${dropdownItemClasses.small} {
    padding: 5px 9px;
    height: 28px;
  }

  .${dropdownItemClasses.medium} {
    padding: 5px 11px;
    height: 32px;
  }

  .${dropdownItemClasses.large} {
    padding: 5px 13px;
    height: 40px;
  }
`
