import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { listBoxClasses } from './ListBox.classes'

export type ListBoxProps = Omit<
  React.HTMLAttributes<HTMLUListElement>,
  'label'
> & {
  open?: boolean
  label?: string
  onClose?: () => void
  handleRef: React.RefObject<HTMLElement>
}

export const ListBox: React.FC<ListBoxProps> & {
  classes: typeof listBoxClasses
} = ({ open, label, handleRef, onClose, children, ...props }) => {
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
      {...props}
      ref={ref}
      role="listbox"
      aria-label={label}
      style={{ ...style, ...(props.style ?? {}) }}
      className={clsx(
        props.className,
        listBoxClasses.root,
        open && listBoxClasses.open,
      )}
    >
      {children}
    </ul>
  )
}

ListBox.classes = listBoxClasses
