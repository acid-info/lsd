import { LsdIcon } from '../LsdIcon'
import type { LsdIconProps } from '../LsdIcon'
import React from 'react'

function SearchIconSvg(props: React.SVGAttributes<SVGElement>) {
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
        d="M8.61 7.74083L11.9525 11.0833L11.0833 11.9525L7.74083 8.61C7.11667 9.05917 6.36417 9.33333 5.54167 9.33333C3.4475 9.33333 1.75 7.63583 1.75 5.54167C1.75 3.4475 3.4475 1.75 5.54167 1.75C7.63583 1.75 9.33333 3.4475 9.33333 5.54167C9.33333 6.36417 9.05917 7.11667 8.61 7.74083ZM5.54167 2.91667C4.08917 2.91667 2.91667 4.08917 2.91667 5.54167C2.91667 6.99417 4.08917 8.16667 5.54167 8.16667C6.99417 8.16667 8.16667 6.99417 8.16667 5.54167C8.16667 4.08917 6.99417 2.91667 5.54167 2.91667Z"
        fill="black"
      />
    </svg>
  )
}

const SearchIcon = LsdIcon(SearchIconSvg, { filled: true })

export { SearchIcon }
