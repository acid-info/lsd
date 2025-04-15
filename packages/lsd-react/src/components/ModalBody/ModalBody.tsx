import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { modalBodyClasses } from './ModalBody.classes'

export type ModalBodyProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'>

const classes = modalBodyClasses

function ModalBody({ children, ...props }: ModalBodyProps) {
  const commonProps = useCommonProps(props)

  return (
    <div
      {...omitCommonProps(props)}
      className={clsx(commonProps.className, modalBodyClasses.root)}
    >
      {children}
    </div>
  )
}

ModalBody.classes = classes

export { ModalBody }
