import { ToastProps } from '../components/Toast'
import { toastClasses } from '../components/Toast/Toast.classes'

export const setToastPosition = (
  toastElement: HTMLDivElement,
  position: ToastProps['position'],
  xOffset: number = 0,
  yOffset: number = 0,
) => {
  switch (position) {
    case 'top-left':
      toastElement.style.top = `${yOffset}px`
      toastElement.style.left = `${xOffset}px`
      break
    case 'top':
      toastElement.style.top = `${yOffset}px`
      toastElement.style.left = `${
        (window.innerWidth - toastElement.offsetWidth) / 2 + xOffset
      }px`
      break
    case 'top-right':
      toastElement.style.top = `${yOffset}px`
      toastElement.style.right = `${xOffset}px`
      break
    case 'bottom-left':
      toastElement.style.bottom = `${yOffset}px`
      toastElement.style.left = `${xOffset}px`
      break
    case 'bottom':
      toastElement.style.bottom = `${yOffset}px`
      toastElement.style.left = `${
        (window.innerWidth - toastElement.offsetWidth) / 2 + xOffset
      }px`
      break
    case 'bottom-right':
      toastElement.style.bottom = `${yOffset}px`
      toastElement.style.right = `${xOffset}px`
      break
  }
}

export const getToastAnimationClass = (
  position: ToastProps['position'],
  animation: ToastProps['animation'],
) => {
  switch (animation) {
    case 'moveDown':
      return toastClasses.moveDown
    case 'moveUp':
      return toastClasses.moveUp
    case 'auto':
      return position!.startsWith('top')
        ? toastClasses.moveDown
        : toastClasses.moveUp
    default:
      return ''
  }
}
