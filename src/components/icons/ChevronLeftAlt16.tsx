import * as React from "react";

const ChevronLeftAlt16 = React.forwardRef<
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
      d="M9.204 3.236a.75.75 0 1 1 1.092 1.028L6.779 8l3.517 3.736.05.059a.75.75 0 0 1-1.087 1.022l-.055-.053-4-4.25a.75.75 0 0 1 0-1.028l4-4.25Z"
    />
  </svg>
));

ChevronLeftAlt16.displayName = "ChevronLeftAlt16";

export default ChevronLeftAlt16;
