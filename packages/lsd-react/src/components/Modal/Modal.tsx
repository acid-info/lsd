import clsx from 'clsx'
import React, { ReactNode } from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { modalClasses } from './Modal.classes'
import { CloseIcon } from '../Icons'
import { Typography } from '../Typography'
import { IconButton } from '../IconButton'

export type ModalProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {
    isOpen: boolean
    size?: 'xsmall' | 'small' | 'medium' | 'large'
    title?: ReactNode
    subtitle?: ReactNode
    onClose?: () => void
  }

const classes = modalClasses

function Modal({
  isOpen,
  size = 'large',
  title,
  subtitle,
  onClose,
  children,
  ...props
}: ModalProps) {
  const commonProps = useCommonProps(props)

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && onClose) {
      onClose()
    }
  }

  if (!isOpen) {
    return null
  }

  return (
    <div
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        modalClasses.root,
        modalClasses[size],
      )}
      onClick={handleOverlayClick}
    >
      <div className={clsx(modalClasses.modalContainer)}>
        <div className={modalClasses.header}>
          <div className={modalClasses.titleAndSubtitleContainer}>
            {!!title && (
              <Typography
                className={modalClasses.title}
                component="div"
                variant={size === 'small' ? 'h6' : 'h5'}
              >
                {title}
              </Typography>
            )}

            {!!subtitle && (
              <Typography
                className={modalClasses.subtitle}
                variant={size === 'small' ? 'label2' : 'label1'}
                component="div"
              >
                {subtitle}
              </Typography>
            )}
          </div>

          <IconButton
            onClick={onClose}
            className={modalClasses.closeIcon}
            size="medium"
          >
            <CloseIcon color="primary" />
          </IconButton>
        </div>
        {children}
      </div>
    </div>
  )
}

Modal.classes = classes

export { Modal }
