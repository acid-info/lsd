import { toastClasses } from './Toast.classes'

export const ToastStyles = `
  .${toastClasses.root} {
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    background: rgb(var(--lsd-surface-primary));
    border: 1px solid rgb(var(--lsd-border-primary));
    padding: 8px;

    height: fit-content;
  }

  .${toastClasses.inlineButtonContainer} {
    flex-shrink: 0;
  }

  .${toastClasses.columnButtonContainer} {
    margin-top: 18px;
    margin-bottom: 6px;
  }

  .${toastClasses.inlineContainer} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
  }

  .${toastClasses.columnContainer} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .${toastClasses.textContainer} {
    display: flex;
    flex-direction: column;
    color: rgb(var(--lsd-text-secondary));
    padding-left: 12px;
  }

  .${toastClasses.title} {
    position: relative;
  }

  .${toastClasses.information} {
    margin-top: 4px;
  }

  .${toastClasses.buttonContainer} {
    min-height: 28px;
    min-width: 60px;
    width: fit-content;
    padding: 0px 12px;
  }

  .${toastClasses.closeButton} {
    margin-bottom: auto;
    flex-shrink: 0;
    height: 28px;
    width: 28px;

    margin-left: auto;
  }

  .${toastClasses.columnIconContainer} {
    display: flex;
    justify-content: center;
    margin-bottom: auto;

    position: relative;
    top: 4px;
    padding-left: 4px;
  }

  .${toastClasses.inlineIconContainer} {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 4px;
  }

  .${toastClasses.icon} {
    position: relative;
  }

  .${toastClasses.large} {
    width: 364px;
  }

  .${toastClasses.medium} {
    width: 336px;
  }

  .${toastClasses.small} {
    width: 296px;

    .${toastClasses.icon} {
      top: 0px;
    }
  }
`
