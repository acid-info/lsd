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

export const ModalBody: React.FC<ModalBodyProps> & {
  classes: typeof modalBodyClasses
} = ({ children, ...props }) => {
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

ModalBody.classes = modalBodyClasses
