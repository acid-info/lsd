import { LsdIcon } from '../LsdIcon'
import type { LsdIconProps } from '../LsdIcon'
import React from 'react'

function RadioButtonIconSvg(props: React.SVGAttributes<SVGElement>) {
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
        d="M7.0013 1.16669C3.7813 1.16669 1.16797 3.78002 1.16797 7.00002C1.16797 10.22 3.7813 12.8334 7.0013 12.8334C10.2213 12.8334 12.8346 10.22 12.8346 7.00002C12.8346 3.78002 10.2213 1.16669 7.0013 1.16669ZM7.0013 11.6667C4.42297 11.6667 2.33464 9.57835 2.33464 7.00002C2.33464 4.42169 4.42297 2.33335 7.0013 2.33335C9.57964 2.33335 11.668 4.42169 11.668 7.00002C11.668 9.57835 9.57964 11.6667 7.0013 11.6667Z"
        fill="black"
      />
    </svg>
  )
}

const RadioButtonIcon = LsdIcon(RadioButtonIconSvg, { filled: true })

export { RadioButtonIcon }
