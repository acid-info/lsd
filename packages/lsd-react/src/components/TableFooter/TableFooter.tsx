import clsx from 'clsx'
import React, { useEffect, useReducer, useState } from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { tableFooterClasses } from './TableFooter.classes'
import { table } from 'console'
import { IconButton } from '../IconButton'
import { NavigateBeforeIcon, NavigateNextIcon } from '../Icons'
import { Dropdown, DropdownOption } from '../Dropdown'

// 1. Define the reducer and its actions
type Action =
  | { type: 'SET_PAGE'; payload: string | string[] }
  | { type: 'INCREMENT_PAGE' }
  | { type: 'DECREMENT_PAGE' }

export type TableFooterProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {
    size?: 'small' | 'medium' | 'large'
    pages: number
    onPageChange?: (page: number) => void
  }

export const TableFooter: React.FC<TableFooterProps> & {
  classes: typeof tableFooterClasses
} = ({ size = 'large', pages, onPageChange, children, ...props }) => {
  const commonProps = useCommonProps(props)

  const [pageNumber, dispatch] = useReducer(
    (state: number, action: Action): number => {
      switch (action.type) {
        case 'SET_PAGE':
          const pageNumber = parseInt(action.payload as string)
          // Ensure the page is between 1 and the maximum page number
          return Math.max(1, Math.min(pageNumber, pages))
        case 'INCREMENT_PAGE':
          // Ensure the page doesn't exceed the maximum
          return state < pages ? state + 1 : state
        case 'DECREMENT_PAGE':
          // Ensure the page doesn't go below 1
          return state > 1 ? state - 1 : state
        default:
          return state
      }
    },
    1,
  )

  useEffect(() => {
    if (onPageChange) {
      onPageChange(pageNumber)
    }
  }, [pageNumber, onPageChange])

  const dropdownOptions: DropdownOption[] =
    pages > 1
      ? new Array(pages).fill(null).map((value, index) => ({
          value: `${index + 1}`,
          name: `${index + 1}/${pages}`,
        }))
      : []

  return (
    <div
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        props.className,
        tableFooterClasses.root,
        tableFooterClasses[size],
      )}
    >
      <div className={tableFooterClasses.content}>{children}</div>

      {pages > 1 && (
        <div className={tableFooterClasses.paginationControls}>
          <IconButton
            size={size}
            onClick={() => dispatch({ type: 'DECREMENT_PAGE' })}
          >
            <NavigateBeforeIcon color="primary" />
          </IconButton>
          <Dropdown
            {...commonProps}
            size={size}
            options={dropdownOptions}
            onChange={(newPage) =>
              dispatch({ type: 'SET_PAGE', payload: newPage })
            }
            value={dropdownOptions[pageNumber - 1].value}
          />
          <IconButton
            size={size}
            onClick={() => dispatch({ type: 'INCREMENT_PAGE' })}
          >
            <NavigateNextIcon color="primary" />
          </IconButton>
        </div>
      )}
    </div>
  )
}

TableFooter.classes = tableFooterClasses
