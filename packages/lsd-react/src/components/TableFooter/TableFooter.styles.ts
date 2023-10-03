import { css } from '@emotion/react'
import { tableFooterClasses } from './TableFooter.classes'
import { iconButtonClasses } from '../IconButton/IconButton.classes'
import { dropdownClasses } from '../Dropdown/Dropdown.classes'
import { typographyClasses } from '../Typography/Typography.classes'
import { tableClasses } from '../Table/Table.classes'

export const TableFooterStyles = css`
  .${tableFooterClasses.root} {
    display: flex;
    box-sizing: border-box;
    border: 1px solid rgb(var(--lsd-border-primary));

    .${dropdownClasses.root} {
      width: auto;
    }

    .${dropdownClasses.buttonContainer} {
      box-sizing: border-box;
      border-left: 0px !important;
      border-right: 0px !important;
    }

    .${dropdownClasses.trigger} {
      padding-left: 16px !important;
      padding-right: 16px !important;
      justify-content: center;
    }

    .${dropdownClasses.icons} {
      padding-left: 10px;
    }
  }

  /* If the footer is part of a table, remove the border top. */
  .${tableClasses.root} {
    .${tableFooterClasses.root} {
      border-top: 0px;
    }
  }

  .${tableFooterClasses.content} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: 0 16px;
  }

  .${tableFooterClasses.paginationControls} {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .${tableFooterClasses.large} {
    height: 64px;

    .${iconButtonClasses.large} {
      height: 32px;
      width: 32px;
    }

    .${dropdownClasses.buttonContainer} {
      height: 32px;
    }

    .${tableFooterClasses.paginationControls} {
      padding: 0 16px;
    }
  }

  .${tableFooterClasses.medium} {
    height: 60px;

    .${iconButtonClasses.medium} {
      height: 32px;
      width: 32px;
    }

    .${dropdownClasses.buttonContainer} {
      height: 32px;
    }

    .${tableFooterClasses.paginationControls} {
      padding: 0 14px;
    }
  }

  .${tableFooterClasses.small} {
    height: 56px;

    .${iconButtonClasses.small} {
      height: 28px;
      width: 28px;
    }

    .${typographyClasses.label1} {
      font-size: 12px;
    }

    .${dropdownClasses.buttonContainer} {
      height: 28px;
    }

    .${tableFooterClasses.paginationControls} {
      padding: 0 12px;
    }
  }
`
