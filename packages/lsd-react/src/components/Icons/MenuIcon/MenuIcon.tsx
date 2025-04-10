import { LsdIcon } from '../LsdIcon'
import type { LsdIconProps } from '../LsdIcon'
import React from 'react'

function MenuIconSvg(props: React.SVGAttributes<SVGElement>) {
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
        d="M1.75 4.66667V3.5H12.25V4.66667H1.75ZM1.75 7.58333H12.25V6.41667H1.75V7.58333ZM1.75 10.5H12.25V9.33333H1.75V10.5Z"
        fill="black"
      />
    </svg>
  )
}

const MenuIcon = LsdIcon(MenuIconSvg, { filled: true })

export { MenuIcon }
