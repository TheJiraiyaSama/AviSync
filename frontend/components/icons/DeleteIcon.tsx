import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width ?? 14}
        height={props.height ?? 18}
        fill="current"
        {...props}
    >
        <path
            fill="current"
            d="M1 16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4H1v12ZM14 1h-3.5l-1-1h-5l-1 1H0v2h14V1Z"
        />
    </svg>
);
export { SvgComponent as DeleteIcon };
