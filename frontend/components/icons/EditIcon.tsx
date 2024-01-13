import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 24}
    height={props.height ?? 24}
    fill="current"
    {...props}
  >
    <path
      fill="current"
      d="M2.999 17.251v3.75h3.75l11.06-11.06-3.75-3.75-11.06 11.06Zm17.71-10.21a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z"
    />
  </svg>
)
export { SvgComponent as EditIcon }
