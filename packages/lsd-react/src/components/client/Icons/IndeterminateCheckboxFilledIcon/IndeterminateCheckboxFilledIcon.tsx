import { LsdIcon } from '../LsdIcon'
import type { LsdIconProps } from '../LsdIcon'
import React from 'react'

function IndeterminateCheckboxFilledIconSvg(
  props: React.SVGAttributes<SVGElement>,
) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.91667 1.75C2.27233 1.75 1.75 2.27233 1.75 2.91667V11.0833C1.75 11.7277 2.27233 12.25 2.91667 12.25H11.0833C11.7277 12.25 12.25 11.7277 12.25 11.0833V2.91667C12.25 2.27233 11.7277 1.75 11.0833 1.75H2.91667ZM9.91667 6.41667H4.08333V7.58333H9.91667V6.41667Z"
        fill="black"
      />
    </svg>
  )
}

const IndeterminateCheckboxFilledIcon = LsdIcon(
  IndeterminateCheckboxFilledIconSvg,
  { filled: true },
)

export { IndeterminateCheckboxFilledIcon }
