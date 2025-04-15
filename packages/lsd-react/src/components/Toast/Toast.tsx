import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { toastClasses } from './Toast.classes'
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

const classes = toastClasses

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
        toastClasses.root,
        toastClasses[size],
      )}
    >
      <div
        className={clsx(
          isInline
            ? toastClasses.inlineIconContainer
            : toastClasses.columnIconContainer,
        )}
      >
        {Icon && <Icon color="primary" className={toastClasses.icon} />}
      </div>

      <div
        className={
          isInline ? toastClasses.inlineContainer : toastClasses.columnContainer
        }
      >
        <div className={clsx(toastClasses.textContainer)}>
          {!!title && (
            <Typography
              className={toastClasses.title}
              component="div"
              variant={size === 'small' ? 'label2' : 'label1'}
            >
              {title}
            </Typography>
          )}

          {!!information && (
            <Typography
              className={toastClasses.information}
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
              toastClasses.buttonContainer,
              isInline
                ? toastClasses.inlineButtonContainer
                : toastClasses.columnButtonContainer,
            )}
          >
            {actions}
          </div>
        )}
      </div>

      <IconButton
        onClick={onClose}
        className={toastClasses.closeButton}
        size="medium"
      >
        <CloseIcon color="primary" />
      </IconButton>
    </div>
  )
}

Toast.classes = classes

export { Toast }
