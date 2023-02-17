import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { BreadcrumbItem } from '../BreadcrumbItem'
import { breadcrumbItemClasses } from '../BreadcrumbItem/BreadcrumbItem.classes'
import { ListBox } from '../ListBox'
import { Portal } from '../PortalProvider/Portal'
import { breadcrumbClasses } from './Breadcrumb.classes'

export type BreadcrumbOption = {
  name: string
  value: string
  link: string
  linkComponent?: React.ComponentType<
    React.AnchorHTMLAttributes<HTMLAnchorElement>
  >
}

export type BreadcrumbProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'label' | 'disabled' | 'value' | 'onChange'
> & {
  disabled?: boolean
  ellipsis?: boolean
  maxItems?: number
  options?: BreadcrumbOption[]
  value?: string | string[]
  onChange?: (value: string | string[]) => void
}

export const Breadcrumb: React.FC<BreadcrumbProps> & {
  classes: typeof breadcrumbClasses
} = ({
  disabled = false,
  ellipsis = false,
  maxItems,

  value = [],
  onChange,
  options = [],
  ...props
}) => {
  const ellipsisRef = useRef<HTMLLIElement>(null)
  const [open, setOpen] = useState<boolean>(false)

  maxItems = Math.max(2, Math.min(maxItems || 2, options.length))

  const [root, ...rest] = options
  const [collapsed, visible] = !ellipsis
    ? [[], rest]
    : [
        rest.slice(0, rest.length - maxItems + 1),
        rest.slice(rest.length - maxItems + 1),
      ]

  const renderItems = (items: BreadcrumbOption[]) =>
    items.map((item, idx) => (
      <BreadcrumbItem
        key={idx}
        current={idx === visible.length - 1 && item !== root}
        label={item.value}
        link={item.link}
        linkComponent={item?.linkComponent}
      />
    ))

  const onTrigger = () => {
    !disabled && setOpen((value) => !value)
  }

  useEffect(() => {
    if (disabled && open) setOpen(false)
  }, [open, disabled])

  return (
    <div
      {...props}
      className={clsx(
        props.className,
        breadcrumbClasses.root,
        disabled && breadcrumbClasses.disabled,
        open && breadcrumbClasses.open,
      )}
    >
      <ul className={breadcrumbClasses.list}>
        {root && renderItems([root])}
        {collapsed.length > 0 && (
          <BreadcrumbItem
            ellipsisRef={ellipsisRef}
            label={'...'}
            onClick={onTrigger}
          />
        )}
        {renderItems(visible)}
      </ul>
      {ellipsisRef?.current != null && ellipsis && maxItems && (
        <Portal id="breadcrumb">
          <ListBox
            handleRef={ellipsisRef}
            open={open}
            onClose={() => setOpen(false)}
            className={clsx(breadcrumbClasses.listBox)}
          >
            {collapsed.map((opt, idx) => (
              <BreadcrumbItem
                key={idx}
                label={opt.value}
                link={opt.link}
                className={breadcrumbItemClasses.itemLink}
                linkComponent={opt?.linkComponent}
              />
            ))}
          </ListBox>
        </Portal>
      )}
    </div>
  )
}

Breadcrumb.classes = breadcrumbClasses
