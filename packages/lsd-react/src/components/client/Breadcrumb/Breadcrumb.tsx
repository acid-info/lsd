import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import {
  CommonProps,
  omitCommonProps,
  pickCommonProps,
  useCommonProps,
} from '../../../utils/useCommonProps'
import { BreadcrumbItem } from '../BreadcrumbItem'
import { DropdownMenu } from '../DropdownMenu'
import { Portal } from '../PortalProvider/Portal'
import styles from './Breadcrumb.module.css'

export type BreadcrumbOption = {
  name: string
  value: string
  link: string
  linkComponent?: React.ComponentType<
    React.AnchorHTMLAttributes<HTMLAnchorElement>
  >
}

export type BreadcrumbProps = CommonProps &
  Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'label' | 'disabled' | 'value' | 'onChange'
  > & {
    disabled?: boolean
    ellipsis?: boolean
    maxItems?: number
    options?: BreadcrumbOption[]
    value?: string | string[]
    onChange?: (value: string | string[]) => void
    size?: 'small' | 'large'
  }

function Breadcrumb({
  size = 'large',
  disabled = false,
  ellipsis = false,
  maxItems,
  value = [],
  onChange,
  options = [],
  ...props
}: BreadcrumbProps) {
  const commonProps = useCommonProps(props)

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
      <li className={styles.itemLink} key={idx}>
        <BreadcrumbItem
          outlined={idx === visible.length - 1 && item !== root}
          label={item.value}
          link={item.link}
          linkComponent={item?.linkComponent}
          size={size}
        />
      </li>
    ))

  const onTrigger = () => {
    !disabled && setOpen((value) => !value)
  }

  useEffect(() => {
    if (disabled && open) setOpen(false)
  }, [open, disabled])

  return (
    <div
      {...omitCommonProps(props)}
      className={clsx(
        props.className,
        commonProps.className,
        styles['root-breadcrumb'],
        disabled && styles.disabled,
      )}
    >
      <ul className={styles.list}>
        {root && renderItems([root])}
        {collapsed.length > 0 && (
          <li className={styles.itemLink} onClick={onTrigger} ref={ellipsisRef}>
            <BreadcrumbItem
              className=""
              label={'...'}
              size={size}
              {...pickCommonProps(props)}
            />
          </li>
        )}
        {renderItems(visible)}
      </ul>
      {ellipsisRef?.current != null && ellipsis && maxItems && (
        <Portal id="breadcrumb">
          <DropdownMenu
            handleRef={ellipsisRef as React.RefObject<HTMLElement>}
            open={open}
            onClose={() => setOpen(false)}
            className={styles.listBox}
            size={size}
            genericFontFamily={props.genericFontFamily}
            {...pickCommonProps(props)}
          >
            {collapsed.map((opt, idx) => (
              <li className={styles.itemLink} key={idx}>
                <BreadcrumbItem
                  label={opt.value}
                  link={opt.link}
                  linkComponent={opt?.linkComponent}
                />
              </li>
            ))}
          </DropdownMenu>
        </Portal>
      )}
    </div>
  )
}

export { Breadcrumb }
