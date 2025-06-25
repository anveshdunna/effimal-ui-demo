"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

function TabsClassic({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      activationMode="manual"
      data-slot="tabs"
      className={cn("flex flex-col gap-0", className)}
      {...props}
    />
  );
}

function TabsClassicList({
  children,
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "relative inline-flex w-full items-center gap-1 bg-transparent pt-3",
        className,
      )}
      {...props}
    >
      <div className="bg-border-tertiary-opaque absolute -right-12 bottom-0 -left-12 h-px"></div>
      {children}
    </TabsPrimitive.List>
  );
}

function TabsClassicTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "group data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-fg-secondary hover:text-fg-primary text-body-sm data-[state=active]:bg-bg-secondary data-[state=active]:border-b-bg-secondary border-border-tertiary-opaque bg-fill-transparent hover:bg-bg-secondary/50 relative inline-flex h-8 flex-none items-center justify-center gap-1.5 rounded-t-md rounded-b-none border px-3 py-1 font-semibold whitespace-nowrap transition-all focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
}

function TabsClassicContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { TabsClassic, TabsClassicList, TabsClassicTrigger, TabsClassicContent };
