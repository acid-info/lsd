import { LsdIcon } from '../LsdIcon'
import type { LsdIconProps } from '../LsdIcon'
import React from 'react'

function MoreIconSvg(props: React.SVGAttributes<SVGElement>) {
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
        d="M3.49992 5.83334C2.85825 5.83334 2.33325 6.35834 2.33325 7.00001C2.33325 7.64168 2.85825 8.16668 3.49992 8.16668C4.14159 8.16668 4.66659 7.64168 4.66659 7.00001C4.66659 6.35834 4.14159 5.83334 3.49992 5.83334ZM10.4999 5.83334C9.85825 5.83334 9.33325 6.35834 9.33325 7.00001C9.33325 7.64168 9.85825 8.16668 10.4999 8.16668C11.1416 8.16668 11.6666 7.64168 11.6666 7.00001C11.6666 6.35834 11.1416 5.83334 10.4999 5.83334ZM5.83325 7.00001C5.83325 6.35834 6.35825 5.83334 6.99992 5.83334C7.64159 5.83334 8.16659 6.35834 8.16659 7.00001C8.16659 7.64168 7.64159 8.16668 6.99992 8.16668C6.35825 8.16668 5.83325 7.64168 5.83325 7.00001Z"
        fill="black"
      />
    </svg>
  )
}

const MoreIcon = LsdIcon(MoreIconSvg, { filled: true })

export { MoreIcon }
