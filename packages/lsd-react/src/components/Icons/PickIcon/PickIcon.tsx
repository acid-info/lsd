import { LsdIcon } from '../LsdIcon'
import type { LsdIconProps } from '../LsdIcon'
import React from 'react'

function PickIconSvg(props: React.SVGAttributes<SVGElement>) {
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
        d="M9.79287 3.5H2.99998V2.5H11.5V11H10.5V4.20711L3.35353 11.3536L2.64642 10.6464L9.79287 3.5Z"
        fill="black"
      />
    </svg>
  )
}

const PickIcon = LsdIcon(PickIconSvg, { filled: true })

export { PickIcon }
