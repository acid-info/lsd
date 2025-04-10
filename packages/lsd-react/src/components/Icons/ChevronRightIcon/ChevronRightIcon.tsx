import { LsdIcon } from '../LsdIcon'
import type { LsdIconProps } from '../LsdIcon'
import React from 'react'

function ChevronRightIconSvg(props: React.SVGAttributes<SVGElement>) {
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
        d="M5.66137 3.5L4.83887 4.3225L7.51053 7L4.83887 9.6775L5.66137 10.5L9.16137 7L5.66137 3.5Z"
        fill="black"
      />
    </svg>
  )
}

const ChevronRightIcon = LsdIcon(ChevronRightIconSvg, { filled: true })

export { ChevronRightIcon }
