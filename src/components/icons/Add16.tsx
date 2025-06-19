import * as React from "react";

const Add16 = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => (
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
        d="M8.5 2.75a.75.75 0 0 0-1.5 0V7H2.75a.75.75 0 0 0 0 1.5H7v4.25a.75.75 0 1 0 1.5 0V8.5h4.25a.75.75 0 1 0 0-1.5H8.5V2.75Z"
      />
    </svg>
  )
);

Add16.displayName = "Add16";

export default Add16;
