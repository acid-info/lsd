import { LsdIcon } from '../LsdIcon'
import type { LsdIconProps } from '../LsdIcon'
import React from 'react'

function RemoveIconSvg(props: React.SVGAttributes<SVGElement>) {
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
        d="M2.32812 7.58329V6.41663H11.6581V7.58329H2.32812Z"
        fill="black"
      />
    </svg>
  )
}

const RemoveIcon = LsdIcon(RemoveIconSvg, { filled: true })

export { RemoveIcon }
