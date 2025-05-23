import { LsdIcon } from '../LsdIcon'
import type { LsdIconProps } from '../LsdIcon'
import React from 'react'

function FolderIconSvg(props: React.SVGAttributes<SVGElement>) {
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
        d="M5.34925 3.50001L6.51591 4.66668H11.6667V10.5H2.33341V3.50001H5.34925ZM5.83341 2.33334H2.33341C1.69175 2.33334 1.17258 2.85834 1.17258 3.50001L1.16675 10.5C1.16675 11.1417 1.69175 11.6667 2.33341 11.6667H11.6667C12.3084 11.6667 12.8334 11.1417 12.8334 10.5V4.66668C12.8334 4.02501 12.3084 3.50001 11.6667 3.50001H7.00008L5.83341 2.33334Z"
        fill="black"
      />
    </svg>
  )
}

const FolderIcon = LsdIcon(FolderIconSvg, { filled: true })

export { FolderIcon }
