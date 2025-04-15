import { LsdIcon } from '../LsdIcon'
import type { LsdIconProps } from '../LsdIcon'
import React from 'react'

function ChevronDownIconSvg(props: React.SVGAttributes<SVGElement>) {
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
        d="M10.5 5.66125L9.6775 4.83875L7 7.51041L4.3225 4.83874L3.5 5.66125L7 9.16125L10.5 5.66125Z"
        fill="black"
      />
    </svg>
  )
}

const ChevronDownIcon = LsdIcon(ChevronDownIconSvg, { filled: true })

export { ChevronDownIcon }
