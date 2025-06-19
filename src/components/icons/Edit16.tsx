import * as React from "react";

const Edit16 = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
        d="M10.354 1.626a2.75 2.75 0 0 1 3.496.168l.18.175.176.181.168.203a2.75 2.75 0 0 1 0 3.293l-.168.203a5.466 5.466 0 0 1-.176.18l-8 8a.75.75 0 0 1-.276.177l-.106.029-3.75.75a.75.75 0 0 1-.883-.883l.75-3.75.029-.106a.752.752 0 0 1 .176-.277l8-8 .18-.175.204-.168ZM3.19 10.869l-.485 2.425 2.424-.486 6.308-6.31L9.5 4.56 3.19 10.87Zm9.65-7.966a1.251 1.251 0 0 0-1.59-.076l-.092.076-.129.127-.47.469 1.94 1.94.47-.47c.085-.085.11-.11.127-.129l.076-.091a1.251 1.251 0 0 0 0-1.498l-.076-.092-.127-.13-.13-.126Z"
      />
    </svg>
  )
);

Edit16.displayName = "Edit16";

export default Edit16;
