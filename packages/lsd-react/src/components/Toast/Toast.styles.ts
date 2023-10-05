import { css } from '@emotion/react'
import { toastClasses } from './Toast.classes'

export const ToastStyles = css`
  .${toastClasses.root} {
    box-sizing: border-box;
    display: flex;
    position: fixed;
    bottom: 20px;
    left: 20px;
    background: rgb(var(--lsd-surface-primary));
    border: 1px solid rgb(var(--lsd-border-primary));
    padding: 8px;
    align-items: center;
    z-index: 9999;
  }

  .${toastClasses.inlineButtonContainer} {
    margin: 0 8px;
  }

  .${toastClasses.hiddenButtonContainer} {
    visibility: hidden;
  }

  .${toastClasses.blockButton} {
    margin-top: 18px;
    margin-bottom: 12px;
  }

  .${toastClasses.inlineContainer} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .${toastClasses.blockContainer} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .${toastClasses.textContainer} {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    color: rgb(var(--lsd-text-secondary));
    margin-left: 32px;
  }

  .${toastClasses.title} {
    position: relative;
    font-weight: bold;
  }

  .${toastClasses.information} {
    margin-top: 4px;
  }

  .${toastClasses.actionButton} {
    height: 28px;
    min-width: 60px;
    width: fit-content;
    padding: 6px 12px;
  }

  .${toastClasses.closeButton} {
    margin-bottom: auto;
    flex-shrink: 0;
    height: 28px;
    width: 28px;
  }

  .${toastClasses.errorIconContainer} {
    width: 26px;
    display: flex;
    position: relative;
    margin-bottom: auto;
  }

  .${toastClasses.errorIcon} {
    position: absolute;
    top: 5px;
    left: -26px;
  }

  .${toastClasses.large} {
    .${toastClasses.textContainer} {
      min-width: 204px;
    }
  }

  .${toastClasses.medium} {
    .${toastClasses.textContainer} {
      min-width: 184px;
    }
  }

  .${toastClasses.small} {
    .${toastClasses.textContainer} {
      min-width: 144px;
    }
  }
`
