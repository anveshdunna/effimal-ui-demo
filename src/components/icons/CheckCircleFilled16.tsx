import * as React from "react";

const CheckCircleFilled16 = React.forwardRef<
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
      d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-3.97-.97a.75.75 0 1 0-1.06-1.06L7 8.94l-.97-.97a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l3.5-3.5Z"
    />
  </svg>
));

CheckCircleFilled16.displayName = "CheckCircleFilled16";

export default CheckCircleFilled16;
