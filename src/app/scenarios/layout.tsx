"use client";

import { Add16, MoreHorizontal16, Search16 } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import { useMediaQuery } from "usehooks-ts";

export default function ScenariosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const segments = useSelectedLayoutSegments();
  const isScenarioSelected = segments.length === 1;

  const isMobile = !useMediaQuery("(min-width: 64rem)");

  const showAside = (isMobile && !isScenarioSelected) || !isMobile;
  const showChildren = (isMobile && isScenarioSelected) || !isMobile;

  return (
    <div className="flex h-full w-full">
      {showAside && (
        <aside className="border-border-tertiary-opaque sticky top-0 flex h-screen w-full shrink-0 flex-col border-r lg:w-72">
          <div className="flex shrink-0 items-center justify-between px-6 py-4">
            <div className="-ml-1.5 flex items-start gap-2">
              <SidebarTrigger />
              <h2 className="text-title-xs my-0.5 font-semibold">Scenarios</h2>
            </div>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost">
                <Search16 />
              </Button>
              <Button size="icon" variant="ghost">
                <Add16 />
              </Button>
            </div>
          </div>
          <ScrollArea className="min-h-0 flex-1 px-3 py-2" type="auto">
            <div className="flex flex-col gap-0.5">
              {[...Array(20)].map((_, i) => {
                const isActive = pathname === `/scenarios/${i}`;
                return (
                  <Link key={i} href={`/scenarios/${i}`}>
                    <div
                      className={`hover:bg-fill-tertiary-hover active:bg-fill-tertiary-active relative rounded-md px-3 transition ${
                        isActive
                          ? "bg-fill-tertiary-active"
                          : "bg-fill-transparent"
                      }`}
                    >
                      <div className="text-body-md flex flex-col py-3">
                        <div>Scenario name {i}</div>
                        <div className="text-fg-secondary">
                          Scenario description
                        </div>
                      </div>
                      <Button
                        className="absolute top-2 right-3"
                        variant="ghost"
                        size="icon"
                      >
                        <MoreHorizontal16 />
                      </Button>
                    </div>
                  </Link>
                );
              })}
            </div>
          </ScrollArea>
        </aside>
      )}
      {showChildren && <>{children}</>}
    </div>
  );
}
