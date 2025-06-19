import * as React from "react";

const History16 = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>(({ className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    className={className}
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 3.5a4.5 4.5 0 1 1-4.455 5.14.75.75 0 1 0-1.485.212A6.001 6.001 0 1 0 4 3.528V2.75a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h2.5a.75.75 0 0 0 0-1.5H4.646A4.5 4.5 0 0 1 8 3.5Zm.5 2.25a.75.75 0 0 0-1.5 0v2.5c0 .414.336.75.75.75h2a.75.75 0 1 0 0-1.5H8.5V5.75Z"
    />
  </svg>
));

History16.displayName = "History16";

export default History16;
