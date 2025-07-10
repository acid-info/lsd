import { LsdIcon } from '../LsdIcon'
import type { LsdIconProps } from '../LsdIcon'
import React from 'react'

function ChevronUpIconSvg(props: React.SVGAttributes<SVGElement>) {
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
        d="M3.5 8.33875L4.3225 9.16125L7 6.48959L9.6775 9.16125L10.5 8.33875L7 4.83875L3.5 8.33875Z"
        fill="black"
      />
    </svg>
  )
}

const ChevronUpIcon = LsdIcon(ChevronUpIconSvg, { filled: true })

export { ChevronUpIcon }
