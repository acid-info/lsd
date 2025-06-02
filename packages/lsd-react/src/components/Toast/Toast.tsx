import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import styles from './Toast.module.css'
import { CloseIcon, ErrorIcon, LsdIconProps } from '../Icons'
import { IconButton } from '../IconButton'
import { Typography } from '../Typography'

export type ToastProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {
    title: string
    information?: string
    onClose?: () => void
    size?: 'large' | 'medium' | 'small'
    toastRef?: React.Ref<HTMLDivElement>
    icon?: React.ComponentType<LsdIconProps> | null | false
    actions?: React.ReactNode
  }

function Toast({
  title,
  information,
  onClose,
  size = 'large',
  toastRef,
  children,
  icon,
  actions,
  ...props
}: ToastProps) {
  const commonProps = useCommonProps(props)
  const isInline = !information

  const Icon = typeof icon === 'undefined' ? ErrorIcon : icon

  return (
    <div
      ref={toastRef}
      {...omitCommonProps(props)}
      className={clsx(
        props.className,
        commonProps.className,
        styles['root-toast'],
        styles[size],
      )}
    >
      <div
        className={clsx(
          isInline ? styles.inlineIconContainer : styles.columnIconContainer,
        )}
      >
        {Icon && <Icon color="primary" className={styles.icon} />}
      </div>

      <div
        className={isInline ? styles.inlineContainer : styles.columnContainer}
      >
        <div className={clsx(styles.textContainer)}>
          {!!title && (
            <Typography
              className={styles.title}
              component="div"
              variant={size === 'small' ? 'label2' : 'label1'}
            >
              {title}
            </Typography>
          )}

          {!!information && (
            <Typography
              className={styles.information}
              component="div"
              variant={size === 'small' ? 'label2' : 'label1'}
            >
              {information}
            </Typography>
          )}
        </div>

        {!!actions && (
          <div
            className={clsx(
              styles.buttonContainer,
              isInline
                ? styles.inlineButtonContainer
                : styles.columnButtonContainer,
            )}
          >
            {actions}
          </div>
        )}
      </div>

      <IconButton
        onClick={onClose}
        className={styles.closeButton}
        size="medium"
      >
        <CloseIcon color="primary" />
      </IconButton>
    </div>
  )
}

export { Toast }
