import { LsdIcon } from '../LsdIcon'
import type { LsdIconProps } from '../LsdIcon'
import React from 'react'

function CalendarIconSvg(props: React.SVGAttributes<SVGElement>) {
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
        d="M11.0833 2.33332H10.5V1.16666H9.33333V2.33332H4.66667V1.16666H3.5V2.33332H2.91667C2.26917 2.33332 1.75 2.85832 1.75 3.49999V11.6667C1.75 12.3083 2.26917 12.8333 2.91667 12.8333H11.0833C11.725 12.8333 12.25 12.3083 12.25 11.6667V3.49999C12.25 2.85832 11.725 2.33332 11.0833 2.33332ZM11.0833 11.6667H2.91667V5.24999H11.0833V11.6667ZM3.79167 7.58332C3.79167 6.77832 4.445 6.12499 5.25 6.12499C6.055 6.12499 6.70833 6.77832 6.70833 7.58332C6.70833 8.38832 6.055 9.04166 5.25 9.04166C4.445 9.04166 3.79167 8.38832 3.79167 7.58332Z"
        fill="black"
      />
    </svg>
  )
}

const CalendarIcon = LsdIcon(CalendarIconSvg, { filled: true })

export { CalendarIcon }
