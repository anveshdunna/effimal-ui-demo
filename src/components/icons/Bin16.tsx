import * as React from "react";

const Bin16 = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
        d="M6 1.75A.75.75 0 0 1 6.75 1h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 6 1.75ZM1 4.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 4.25ZM2.741 6l1.106 7.3A2 2 0 0 0 5.825 15h4.35a2 2 0 0 0 1.978-1.7L13.259 6H11.74l-1.072 7.075a.5.5 0 0 1-.494.425h-4.35a.5.5 0 0 1-.494-.425L4.259 6H2.74Z"
      />
    </svg>
  ),
);

Bin16.displayName = "Bin16";

export default Bin16;
