import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { toastClasses } from './Toast.classes'
import { CloseIcon, ErrorIcon } from '../Icons'
import { IconButton } from '../IconButton'
import { Typography } from '../Typography'
import { Button } from '../Button'
import {
  getToastAnimationClass,
  setToastPosition,
} from '../../utils/toast.utils'

export type ToastProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {
    isOpen: boolean
    title: string
    information?: string
    inline?: boolean
    buttonText?: string
    onButtonClick?: () => void
    onClose?: () => void
    size?: 'large' | 'medium' | 'small'
    position?:
      | 'top-left'
      | 'top'
      | 'top-right'
      | 'bottom-left'
      | 'bottom'
      | 'bottom-right'
    animation?: 'auto' | 'moveDown' | 'moveUp'
    openTimeMilliseconds?: number
    xOffset?: number
    yOffset?: number
  }

export const Toast: React.FC<ToastProps> & {
  classes: typeof toastClasses
} = ({
  isOpen,
  title,
  information,
  inline = true,
  buttonText,
  onButtonClick,
  onClose,
  size = 'large',
  position = 'top',
  animation = 'auto',
  openTimeMilliseconds,
  xOffset = 20,
  yOffset = 20,
  children,
  ...props
}) => {
  const commonProps = useCommonProps(props)
  const isInlineButtonHidden = !inline || !!information || !buttonText
  const toastRef = useRef<HTMLDivElement | null>(null)
  // Used for the closing animation.
  const [isClosing, setIsClosing] = useState(false)

  // Closing flow:
  // 1. handleClose is called.
  // 2. handleClose sets isClosing to true.
  // 3. isClosing triggers the closing animation.
  // 4. When the closing animation ends, handleAnimationEnd is called.
  const handleClose = () => {
    setIsClosing(true)
  }

  const handleAnimationEnd = () => {
    if (isClosing && onClose) {
      onClose()
      setIsClosing(false) // reset the state for potential reuse of the component
    }
  }

  // Close the timer after the specified time.
  useEffect(() => {
    if (!isOpen || !openTimeMilliseconds) return

    let timer: ReturnType<typeof setTimeout> | null = null

    if (openTimeMilliseconds && onClose) {
      timer = setTimeout(onClose, openTimeMilliseconds)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [isOpen, openTimeMilliseconds, onClose])

  // Sets the toast position.
  useEffect(() => {
    if (isOpen && toastRef.current) {
      setToastPosition(toastRef.current, position, xOffset, yOffset)
    }
  }, [isOpen, position])

  // If the toast is not open, do not render anything.
  if (!isOpen) {
    return null
  }

  return (
    <div
      ref={toastRef}
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        toastClasses.root,
        toastClasses[size],
        getToastAnimationClass(position, animation),
        isClosing && toastClasses.closingAnimation,
      )}
      onAnimationEnd={handleAnimationEnd}
    >
      <div
        className={
          inline ? toastClasses.inlineContainer : toastClasses.blockContainer
        }
      >
        <div className={clsx(toastClasses.textContainer)}>
          {!!title && (
            <Typography className={toastClasses.title} component="div">
              <ErrorIcon
                color="primary"
                className={toastClasses.errorIcon}
                style={{ width: '16px' }}
              />
              {title}
            </Typography>
          )}

          {!!information && (
            <Typography className={toastClasses.information} component="div">
              {information}
            </Typography>
          )}

          {!inline && !!buttonText && (
            <Button
              onClick={onButtonClick}
              className={clsx(
                toastClasses.actionButton,
                toastClasses.blockButton,
              )}
            >
              {buttonText}
            </Button>
          )}
        </div>

        <div
          className={clsx(
            toastClasses.inlineButtonContainer,
            isInlineButtonHidden && toastClasses.hiddenButtonContainer,
          )}
        >
          <Button onClick={onButtonClick} className={toastClasses.actionButton}>
            {`${isInlineButtonHidden ? '' : buttonText}`}
          </Button>
        </div>
      </div>

      <IconButton
        onClick={handleClose}
        className={toastClasses.closeButton}
        size="medium"
      >
        <CloseIcon color="primary" />
      </IconButton>
    </div>
  )
}

Toast.classes = toastClasses
