import { Meta, Story } from '@storybook/react'
import {
  ToastContantAndOptions,
  ToastProvider,
  useToast,
} from './ToastProvider'
import { FC } from 'react'
import { Button } from '../Button'
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
} as Meta

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

export const Root: Story<ToastContantAndOptions> = (args) => {
  return (
    <ToastProvider>
      <ToastButton {...args} />
    </ToastProvider>
  )
}

Root.args = {
  title: 'Toast Title',
  information: '',
  size: 'large',
  position: 'top-center',
  duration: 4000,
}
