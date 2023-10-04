import { css } from '@emotion/react'
import { modalBodyClasses } from './ModalBody.classes'

export const ModalBodyStyles = css`
  .${modalBodyClasses.root} {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 1px solid rgb(var(--lsd-border-primary));
    padding: 30px;
    margin: 18px 0;
  }
`
