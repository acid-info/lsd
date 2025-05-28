import React, { createContext, useContext, ReactNode } from 'react'
import {
  ToastOptions as HotToastOptions,
  useToaster,
  toast as hotToast,
} from 'react-hot-toast/headless'
import { Toast, ToastProps } from '../Toast'
import styles from './ToastProvider.module.css'
import { ToastPosition } from 'react-hot-toast'
import { Portal } from '../PortalProvider/Portal'
import clsx from 'clsx'

export type ToastContent = {
  title: ToastProps['title']
  information: ToastProps['information']
}

export type ToastOptions = Pick<HotToastOptions, 'position' | 'duration'> &
  Omit<ToastProps, 'title' | 'information'>

export type ToastContantAndOptions = ToastContent & ToastOptions

type ShowToastType = (content: ToastContent, options?: ToastOptions) => void

const getPositionStyle = (
  position: ToastPosition | undefined,
  offset: number,
): { positionClassName: string; transform: string } => {
  if (!position)
    return { positionClassName: '', transform: `translateY(${offset}px)` }

  let positionClassName = ''
  const isCenter = position.includes('center')
  const isBottom = position.includes('bottom')
  const transform = `translateY(${isBottom ? -offset : offset}px) translateX(${
    isCenter ? '-50%' : '0'
  })`

  if (position === 'top-left') {
    positionClassName = styles.topLeft
  } else if (position === 'top-center') {
    positionClassName = styles.topCenter
  } else if (position === 'top-right') {
    positionClassName = styles.topRight
  } else if (position === 'bottom-left') {
    positionClassName = styles.bottomLeft
  } else if (position === 'bottom-center') {
    positionClassName = styles.bottomCenter
  } else if (position === 'bottom-right') {
    positionClassName = styles.bottomRight
  }

  return {
    positionClassName,
    transform,
  }
}

type ToastContextType = ShowToastType | null

export const ToastContext = createContext<ToastContextType>(null)

type ToastContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  toastsPropsMap: Map<string, ToastContantAndOptions>
}

function ToastContainer({
  toastsPropsMap,
  className,
  ...containerProps
}: ToastContainerProps) {
  const { toasts, handlers } = useToaster()
  const { startPause, endPause, calculateOffset, updateHeight } = handlers

  return (
    <Portal id="toast">
      {toasts.map((toast) => {
        const propsMapValue = toastsPropsMap.get(toast.id)

        if (!propsMapValue) {
          console.warn('Could not find toast with id', toast.id)
          return null
        }

        const { position, duration, ...customProps } = propsMapValue

        const offset = calculateOffset(toast, {
          reverseOrder: false,
          gutter: 8,
          defaultPosition: position,
        })

        const ref = (el: HTMLDivElement | null) => {
          if (el && typeof toast.height !== 'number') {
            const height = el.getBoundingClientRect().height
            updateHeight(toast.id, height)
          }
        }

        const { transform: positionTransform, positionClassName } =
          getPositionStyle(position, offset)

        return (
          <div
            key={`container-${toast.id}`}
            onMouseEnter={startPause}
            onMouseLeave={endPause}
            {...containerProps}
            className={clsx(
              styles.toastContainer,
              positionClassName,
              className,
            )}
            style={{
              transform: positionTransform,
              ...containerProps.style,
            }}
          >
            <Toast
              key={toast.id}
              className={clsx(customProps.className)}
              toastRef={ref}
              {...customProps}
              style={{
                opacity: toast.visible ? 1 : 0,
                ...customProps.style,
              }}
              onClose={() => {
                hotToast.dismiss(toast.id)
                customProps.onClose?.()
              }}
            />
          </div>
        )
      })}
    </Portal>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

type ToastProviderProps = React.HTMLAttributes<HTMLDivElement> & {
  providerToastOptions?: ToastOptions
  children: ReactNode
}

function ToastProvider({
  providerToastOptions,
  children,
  ...toastsContainerProps
}: ToastProviderProps) {
  const [toastsPropsMap, setToastsPropsMap] = React.useState<
    Map<string, ToastContantAndOptions>
  >(new Map())

  const showToast: ShowToastType = (content, showToastOptions) => {
    const options = {
      ...providerToastOptions,
      ...showToastOptions,
    }

    const toastId = hotToast('', { duration: options?.duration })

    if (content) {
      setToastsPropsMap((prev) => {
        const newMap = new Map(prev)
        newMap.set(toastId, { ...content, ...options })
        return newMap
      })
    }
  }

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <ToastContainer
        toastsPropsMap={toastsPropsMap}
        {...toastsContainerProps}
      />
    </ToastContext.Provider>
  )
}

export { ToastProvider }
