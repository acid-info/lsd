import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { BreadcrumbItem } from '../BreadcrumbItem'
import { breadcrumbItemClasses } from '../BreadcrumbItem/BreadcrumbItem.classes'
import { ListBox } from '../ListBox'
import { Portal } from '../PortalProvider/Portal'
import { Typography } from '../Typography'
import { breadcrumbClasses } from './Breadcrumb.classes'

export type BreadcrumbOption = {
  name: string
  value: string
  link: string
}

export type BreadcrumbProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'label' | 'disabled' | 'value' | 'onChange'
> & {
  disabled?: boolean
  ellipsis?: boolean
  maxItems?: number
  size?: 'small' | 'medium' | 'large'
  options?: BreadcrumbOption[]
  value?: string | string[]
  onChange?: (value: string | string[]) => void
}

export const Breadcrumb: React.FC<BreadcrumbProps> & {
  classes: typeof breadcrumbClasses
} = ({
  size = 'large',
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

  maxItems = Math.max(1, Math.min(maxItems || 1, options.length))

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
        current={idx === visible.length - 1}
        label={item.value}
        size={size}
        link={item.link}
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
        breadcrumbClasses[size],
        disabled && breadcrumbClasses.disabled,
        open && breadcrumbClasses.open,
      )}
    >
      <ul className={breadcrumbClasses.list}>
        {root && renderItems([root])}
        {collapsed.length > 0 && (
          <BreadcrumbItem
            ellipsisRef={ellipsisRef}
            size={size}
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
            {collapsed.map((opt) => (
              <Typography
                color="primary"
                component="a"
                href={opt.link}
                variant={size === 'large' ? 'label1' : 'label2'}
                className={breadcrumbItemClasses.elementLink}
              >
                {opt.value}
              </Typography>
            ))}
          </ListBox>
        </Portal>
      )}
    </div>
  )
}

Breadcrumb.classes = breadcrumbClasses
