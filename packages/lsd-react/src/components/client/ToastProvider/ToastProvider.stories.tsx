import type { Meta, StoryObj } from '@storybook/react'
import {
  ToastContantAndOptions,
  ToastProvider,
  useToast,
} from './ToastProvider'
import { FC } from 'react'
import { Button } from '../Button'
import { pickCommonProps } from '../../../utils/useCommonProps'

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
    position: {
      type: {
        name: 'enum',
        value: [
          'top-left',
          'top-center',
          'top-right',
          'bottom-left',
          'bottom-center',
          'bottom-right',
        ],
      },
    },
  },
} as Meta<typeof ToastProvider>

type Story = StoryObj<object>

const ToastButton: FC<ToastContantAndOptions> = ({
  information,
  title,
  ...toastArgs
}) => {
  const showToast = useToast()

  return (
    <Button
      {...pickCommonProps(toastArgs)}
      onClick={() => showToast({ title, information }, { ...toastArgs })}
    >
      Show Toast
    </Button>
  )
}

const toastArgs: ToastContantAndOptions = {
  title: 'Toast Title',
  information: '',
  size: 'large',
  position: 'top-center',
  duration: 4000,
}

export const Root: Story = {
  args: toastArgs,
  render: (args) => (
    <ToastProvider>
      <ToastButton {...(args as ToastContantAndOptions)} />
    </ToastProvider>
  ),
}
