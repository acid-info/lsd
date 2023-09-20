import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { dropdownMenuClasses } from './DropdownMenu.classes'

export type DropdownMenuProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLUListElement>, 'label'> & {
    open?: boolean
    label?: string
    size?: 'small' | 'medium' | 'large'
    onClose?: () => void
    handleRef: React.RefObject<HTMLElement>
  }

export const DropdownMenu: React.FC<DropdownMenuProps> & {
  classes: typeof dropdownMenuClasses
} = ({
  size = 'large',
  open,
  label,
  handleRef,
  onClose,
  children,
  ...props
}) => {
  const commonProps = useCommonProps(props)
  const ref = useRef<HTMLUListElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})

  useClickAway(ref, (event) => {
    if (!open || event.composedPath().includes(handleRef.current!)) return

    onClose && onClose()
  })

  const updateStyle = () => {
    const { width, height, top, left } =
      handleRef.current!.getBoundingClientRect()

    setStyle({
      left,
      width,
      top: top + height,
    })
  }

  useEffect(() => {
    updateStyle()
  }, [open])

  return (
    <ul
      {...omitCommonProps(props)}
      ref={ref}
      role="listbox"
      aria-label={label}
      style={{ ...style, ...(props.style ?? {}) }}
      className={clsx(
        commonProps.className,
        props.className,
        dropdownMenuClasses.root,
        dropdownMenuClasses[size],
        open && dropdownMenuClasses.open,
      )}
    >
      {children}
    </ul>
  )
}

DropdownMenu.classes = dropdownMenuClasses
