import * as React from "react";

const Scenario20 = React.forwardRef<
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
      d="M17 6.25a.75.75 0 0 1-1.5 0v-.69l-4.28 4.28a2.25 2.25 0 0 1-1.591.66H3.75a.75.75 0 0 1 0-1.5h5.879a.75.75 0 0 0 .53-.22l4.28-4.28h-.689a.75.75 0 0 1 0-1.5h2.5l.077.004A.75.75 0 0 1 17 3.75v2.5ZM15.5 14.44v-.69a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h.69l-4.024-4.024c.424-.061.82-.255 1.127-.562l.216-.216 3.74 3.741Z"
    />
  </svg>
));

Scenario20.displayName = "Scenario20";

export default Scenario20;
