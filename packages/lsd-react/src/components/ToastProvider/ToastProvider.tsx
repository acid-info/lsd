import React, { createContext, useContext, ReactNode } from 'react'
import {
  ToastOptions,
  useToaster,
  toast as hotToast,
} from 'react-hot-toast/headless'
import { Toast, ToastProps } from '../Toast'
import { toastProviderClasses } from './ToastProvider.classes'

type ShowToastType = (props: ToastProps, options?: ToastOptions) => void

export const ToastContext = createContext<null | ShowToastType>(null)

type ToastsProps = {
  toastsPropsMap: Map<string, ToastProps>
}

const Toasts: React.FC<ToastsProps> = ({ toastsPropsMap }) => {
  const { toasts, handlers } = useToaster()
  const { startPause, endPause, calculateOffset, updateHeight } = handlers

  return (
    <div
      onMouseEnter={startPause}
      onMouseLeave={endPause}
      className={toastProviderClasses.toastsContainer}
    >
      {toasts.map((toast) => {
        const customProps = toastsPropsMap.get(toast.id)

        if (!customProps) {
          console.error('Could not find toast with id', toast.id)
          return null
        }

        const offset = calculateOffset(toast, {
          reverseOrder: false,
          gutter: 8,
        })

        const ref = (el: HTMLDivElement | null) => {
          if (el && typeof toast.height !== 'number') {
            const height = el.getBoundingClientRect().height
            updateHeight(toast.id, height)
          }
        }

        return (
          <Toast
            key={toast.id}
            toastRefFunction={ref}
            style={{
              transition: 'all 0.5s ease-out',
              opacity: toast.visible ? 1 : 0,
              transform: `translateY(${offset}px)`,
            }}
            {...toast.ariaProps}
            {...customProps}
            onClose={() => {
              hotToast.dismiss(toast.id)
              customProps.onClose?.()
            }}
          />
        )
      })}
    </div>
  )
}

export function useLSDToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

type ToastProviderProps = {
  children: ReactNode
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toastsPropsMap, setToastsPropsMap] = React.useState<
    Map<string, ToastProps>
  >(new Map())

  const showToast: ShowToastType = (toastProps, options) => {
    // The toast function displays the toast, and returns its ID.
    // The message is '' because we're not using it - currently
    // we use the Toast component's 'title' and 'information' props to display info.
    const toastId = hotToast('', options)

    if (toastProps) {
      setToastsPropsMap((prev) => {
        const newMap = new Map(prev)
        newMap.set(toastId, toastProps)
        return newMap
      })
    }
  }

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <Toasts toastsPropsMap={toastsPropsMap} />
    </ToastContext.Provider>
  )
}
