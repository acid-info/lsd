import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { modalFooterClasses } from './ModalFooter.classes'

export type ModalFooterProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'>

export const ModalFooter: React.FC<ModalFooterProps> & {
  classes: typeof modalFooterClasses
} = ({ children, ...props }) => {
  const commonProps = useCommonProps(props)

  return (
    <div
      {...omitCommonProps(props)}
      className={clsx(commonProps.className, modalFooterClasses.root)}
    >
      {children}
    </div>
  )
}

ModalFooter.classes = modalFooterClasses
