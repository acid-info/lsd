import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import styles from './DropdownMenu.module.css'
import { useUpdatePositionStyle } from '../../utils/useUpdatePositionStyle'

export type DropdownMenuProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLUListElement>, 'label'> & {
    open?: boolean
    label?: string
    size?: 'small' | 'medium' | 'large'
    onClose?: () => void
    handleRef: React.RefObject<HTMLElement>
  }

function DropdownMenu({
  size = 'large',
  open,
  label,
  handleRef,
  onClose,
  children,
  ...props
}: DropdownMenuProps) {
  const commonProps = useCommonProps(props)
  const ref = useRef<HTMLUListElement>(null)

  useClickAway(ref, (event) => {
    if (!open || event.composedPath().includes(handleRef.current!)) return

    onClose && onClose()
  })

  const positionStyle = useUpdatePositionStyle(handleRef, open)

  return (
    <ul
      {...omitCommonProps(props)}
      ref={ref}
      role="listbox"
      aria-label={label}
      style={{ ...positionStyle, ...(props.style ?? {}) }}
      className={clsx(
        commonProps.className,
        props.className,
        styles['root-dropdownmenu'],
        styles[size],
        open && styles.open,
      )}
    >
      {children}
    </ul>
  )
}

export { DropdownMenu }
