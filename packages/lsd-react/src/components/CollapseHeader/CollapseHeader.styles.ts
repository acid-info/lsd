import { collapseHeaderClasses } from './CollapseHeader.classes'

export const CollapseHeaderStyles = `
  .${collapseHeaderClasses.root} {
    box-sizing: border-box;
  }

  .${collapseHeaderClasses.root}:not(.${collapseHeaderClasses.disabled}) {
    .${collapseHeaderClasses.trigger} {
      &:hover {
        .${collapseHeaderClasses.label} {
          text-decoration: underline;
        }
      }
    }
  }

  .${collapseHeaderClasses.trigger} {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
    background: none;
    border: 1px solid rgb(var(--lsd-border-primary));

    &:focus {
      outline: none;
    }
  }

  .${collapseHeaderClasses.label} {
    cursor: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: auto;
  }

  .${collapseHeaderClasses.icons} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }

  .${collapseHeaderClasses.icon} {
    margin-right: 8px;
  }

  .${collapseHeaderClasses.menuIcon} {
  }

  .${collapseHeaderClasses.disabled} {
    .${collapseHeaderClasses.trigger} {
      opacity: 0.34;
      cursor: initial;
    }
  }

  .${collapseHeaderClasses.large} {
    .${collapseHeaderClasses.trigger} {
      width: 299px;
      height: 40px;
      padding: 9px 17px;
    }
  }

  .${collapseHeaderClasses.medium} {
    .${collapseHeaderClasses.trigger} {
      width: 270px;
      height: 32px;
      padding: 5px 13px;
    }
  }

  .${collapseHeaderClasses.small} {
    .${collapseHeaderClasses.trigger} {
      width: 235px;
      height: 28px;
      padding: 5px 11px;
    }
  }
`
