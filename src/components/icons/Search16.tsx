import * as React from "react";

const Search16 = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
        d="M9.107 10.168a4.5 4.5 0 1 1 1.06-1.06l3.613 3.612a.75.75 0 1 1-1.06 1.06l-3.613-3.612ZM9.5 6.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"
      />
    </svg>
  )
);

Search16.displayName = "Search16";

export default Search16;
