import * as React from "react";

const ArrowUpFilled20 = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>(({ className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    className={className}
    {...props}
  >
    <path
      fill="currentColor"
      d="M9.293 2.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L11 5.414V17a1 1 0 1 1-2 0V5.414L4.707 9.707a1 1 0 0 1-1.414-1.414l6-6Z"
    />
  </svg>
));

ArrowUpFilled20.displayName = "ArrowUpFilled20";

export default ArrowUpFilled20;
