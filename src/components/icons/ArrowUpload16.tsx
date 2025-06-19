import * as React from "react";

const ArrowUpload16 = React.forwardRef<
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
      d="M8.53 1.22a.75.75 0 0 0-1.06 0L4.22 4.47a.75.75 0 0 0 1.06 1.06l1.97-1.97v6.69a.75.75 0 0 0 1.5 0V3.56l1.97 1.97a.75.75 0 1 0 1.06-1.06L8.53 1.22ZM3.75 12.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"
    />
  </svg>
));

ArrowUpload16.displayName = "ArrowUpload16";

export default ArrowUpload16;
