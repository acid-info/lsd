import clsx from 'clsx'
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

export type ToastProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {
    isOpen?: boolean
    title: string
    information?: string
    inline?: boolean
    buttonText?: string
    onButtonClick?: () => void
    onClose?: () => void
    size?: 'large' | 'medium' | 'small'
    toastRefFunction?: (el: HTMLDivElement | null) => void
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
  toastRefFunction,
  children,
  ...props
}) => {
  const commonProps = useCommonProps(props)
  const isInlineButtonHidden = !inline || !!information || !buttonText

  // If the toast is not open, do not render anything.
  if (isOpen === false) {
    return null
  }

  return (
    <div
      ref={toastRefFunction}
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        toastClasses.root,
        toastClasses[size],
      )}
    >
      <div
        className={
          inline ? toastClasses.inlineContainer : toastClasses.blockContainer
        }
      >
        <div className={clsx(toastClasses.textContainer)}>
          {!!title && (
            <Typography
              className={toastClasses.title}
              component="div"
              variant={size === 'small' ? 'label2' : 'label1'}
            >
              <ErrorIcon
                color="primary"
                className={toastClasses.errorIcon}
                style={{ width: '16px' }}
              />
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
        onClick={onClose}
        className={toastClasses.closeButton}
        size="medium"
      >
        <CloseIcon color="primary" />
      </IconButton>
    </div>
  )
}

Toast.classes = toastClasses
