import { css } from '@emotion/react'
import { modalClasses } from './Modal.classes'

export const ModalStyles = css`
  .${modalClasses.root} {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* semi-transparent overlay */
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 9999;
  }

  .${modalClasses.modalContainer} {
    background: rgb(var(--lsd-surface-primary));
    padding: 20px;

    max-width: 90%;

    box-sizing: border-box;
    border: 1px solid rgb(var(--lsd-border-primary));
  }

  .${modalClasses.header} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .${modalClasses.title} {
  }

  .${modalClasses.subtitle} {
  }

  .${modalClasses.closeIcon} {
    cursor: pointer;
  }

  .${modalClasses.titleAndSubtitleContainer} {
    display: flex;
    flex-direction: column;
  }

  .${modalClasses.large} {
    .${modalClasses.modalContainer} {
      min-width: 960px;
    }
  }

  .${modalClasses.medium} {
    .${modalClasses.modalContainer} {
      min-width: 768px;
    }
  }

  .${modalClasses.small} {
    .${modalClasses.modalContainer} {
      min-width: 614px;
    }
  }

  .${modalClasses.xsmall} {
    .${modalClasses.modalContainer} {
      min-width: 490px;
    }
  }
`
