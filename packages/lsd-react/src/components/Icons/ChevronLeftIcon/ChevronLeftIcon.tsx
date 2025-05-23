import { LsdIcon } from '../LsdIcon'
import type { LsdIconProps } from '../LsdIcon'
import React from 'react'

function ChevronLeftIconSvg(props: React.SVGAttributes<SVGElement>) {
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
        d="M9.16137 4.3225L8.33887 3.5L4.83887 7L8.33887 10.5L9.16137 9.6775L6.4897 7L9.16137 4.3225Z"
        fill="black"
      />
    </svg>
  )
}

const ChevronLeftIcon = LsdIcon(ChevronLeftIconSvg, { filled: true })

export { ChevronLeftIcon }
