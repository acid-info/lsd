import { Meta, Story } from '@storybook/react'
import { ToastProps } from '../Toast'
import { ToastProvider, useLSDToast } from './ToastProvider'
import { FC } from 'react'
import { Button } from '../Button'
import { ToastOptions } from 'react-hot-toast'
import { pickCommonProps } from '../../utils/useCommonProps'

export default {
  title: 'ToastProvider',
  component: ToastProvider,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta

type ToastButtonProps = {
  toastArgs: ToastProps & ToastOptions
}

const ToastButton: FC<ToastButtonProps> = ({ toastArgs }) => {
  const showToast = useLSDToast()

  return (
    <Button
      {...pickCommonProps(toastArgs)}
      onClick={() => showToast(toastArgs, { duration: toastArgs.duration })}
      style={{ marginBottom: 8 }}
    >
      Show Toast
    </Button>
  )
}

export const Root: Story<ToastProps & ToastOptions> = (args) => {
  return (
    <ToastProvider>
      <ToastButton toastArgs={args} />
    </ToastProvider>
  )
}

Root.args = {
  title: 'Toast Title',
  information: '',
  size: 'large',
  buttonText: 'Click me',
  inline: true,
  duration: 4000,
}
