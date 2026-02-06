import * as React from "react";

const ChevronLeft16 = React.forwardRef<
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
      d="M9.259 4.199a.75.75 0 0 1 .042 1.06L6.771 8l2.53 2.741A.75.75 0 1 1 8.2 11.76l-3-3.25a.75.75 0 0 1 0-1.018l3-3.25a.75.75 0 0 1 1.06-.042Z"
    />
  </svg>
));

ChevronLeft16.displayName = "ChevronLeft16";

export default ChevronLeft16;
