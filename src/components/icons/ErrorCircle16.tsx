import * as React from "react";

const ErrorCircle16 = React.forwardRef<
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
      d="M8 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM8 4a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1Z"
    />
    <path
      fill="currentColor"
      d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1Zm0 1.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"
    />
  </svg>
));

ErrorCircle16.displayName = "ErrorCircle16";

export default ErrorCircle16;
