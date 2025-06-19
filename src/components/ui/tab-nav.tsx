import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

function NavigationMenu({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root>) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      <NavigationMenuPrimitive.List className="flex items-center gap-0.5 pb-1">
        {children}
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  );
}

function NavigationMenuLink({
  active,
  datasetId,
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link> & {
  active?: boolean;
  datasetId?: string;
}) {
  return (
    <NavigationMenuPrimitive.Link
      active={active}
      data-slot="navigation-menu-link"
      data-active={active}
      className={cn(
        "text-fg-secondary data-[active=true]:active:bg-fill-secondary-active data-[active=true]:hover:bg-fill-secondary-hover data-[active=true]:bg-fill-transparent data-[active=true]:text-fg-primary hover:bg-fill-secondary-hover hover:text-fg-primary active:bg-fill-secondary-active focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex gap-1 rounded-md px-3 h-8 items-center text-body-md font-semibold transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4 ",
        className
      )}
      {...props}
    >
      {children}
      {active && (
        <motion.div
          layoutId={`indicator-${datasetId}`}
          className="absolute inset-x-0 -bottom-1.25 mx-3 h-0.5 bg-fill-neutral"
          transition={{ type: "spring", bounce: 0.1 }}
        />
      )}
    </NavigationMenuPrimitive.Link>
  );
}

export { NavigationMenu, NavigationMenuItem, NavigationMenuLink };
