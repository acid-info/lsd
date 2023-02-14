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
  const ref = useRef<HTMLUListElement>(null)
  const [open, setOpen] = useState(false)

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
      <ul ref={ref} className={breadcrumbClasses.list}>
        {!ellipsis || maxItems === options.length
          ? options.map((opt, idx) => (
              <BreadcrumbItem
                current={idx === options.length - 1}
                label={opt.value}
                size={size}
                link={opt.link}
              />
            ))
          : options.map((opt, idx) => {
              if (idx === 1)
                return (
                  <BreadcrumbItem
                    size={size}
                    label={'...'}
                    onClick={onTrigger}
                  />
                )
              else if (
                maxItems &&
                maxItems > 1 &&
                maxItems < options.length &&
                idx > 1 &&
                idx < options.length - maxItems + 1
              )
                return null
              else
                return (
                  <BreadcrumbItem
                    current={idx === options.length - 1}
                    label={opt.value}
                    size={size}
                    link={opt.link}
                  />
                )
            })}
      </ul>
      {ellipsis && maxItems && (
        <Portal id="breadcrumb">
          <ListBox
            handleRef={ref}
            open={open}
            onClose={() => setOpen(false)}
            className={clsx(
              breadcrumbClasses.listBox,
              size === 'large'
                ? breadcrumbClasses.listBoxLarge
                : breadcrumbClasses.listBoxMedium,
            )}
          >
            {options.slice(1, options.length - maxItems + 1).map((opt) => (
              <Typography
                color="primary"
                component="a"
                href={opt.link}
                variant={size === 'large' ? 'label1' : 'label2'}
                className={breadcrumbItemClasses.listElementLink}
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
