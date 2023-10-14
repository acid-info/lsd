import { css } from '@emotion/react'
import { toastProviderClasses } from './ToastProvider.classes'

export const ToastProviderStyles = css`
  .${toastProviderClasses.toastContainer} {
    position: fixed;

    transition: all 230ms cubic-bezier(0.21, 1.02, 0.73, 1);

    z-index: 9999;
  }

  .${toastProviderClasses.topLeft},
    .${toastProviderClasses.topCenter},
    .${toastProviderClasses.topRight} {
    top: 0;
  }

  .${toastProviderClasses.bottomLeft},
    .${toastProviderClasses.bottomCenter},
    .${toastProviderClasses.bottomRight} {
    bottom: 0;
  }

  .${toastProviderClasses.topCenter}, .${toastProviderClasses.bottomCenter} {
    left: 50%;
  }

  .${toastProviderClasses.topRight}, .${toastProviderClasses.bottomRight} {
    right: 0;
  }
`
