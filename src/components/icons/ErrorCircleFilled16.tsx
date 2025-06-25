import * as React from "react";

const ErrorCircleFilled16 = React.forwardRef<
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
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM7 5a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0V5Zm0 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
    />
  </svg>
));

ErrorCircleFilled16.displayName = "ErrorCircleFilled16";

export default ErrorCircleFilled16;
