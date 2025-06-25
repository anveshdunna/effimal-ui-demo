import * as React from "react";

const ChevronRight16 = React.forwardRef<
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
      d="M6.741 4.199a.75.75 0 0 0-.042 1.06L9.229 8 6.7 10.741A.75.75 0 1 0 7.8 11.76l3-3.25a.75.75 0 0 0 0-1.018l-3-3.25a.75.75 0 0 0-1.06-.042Z"
    />
  </svg>
));

ChevronRight16.displayName = "ChevronRight16";

export default ChevronRight16;
