"use client";

import { Add16, MoreHorizontal16, Search16 } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";

export default function DatasetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const segments = useSelectedLayoutSegments();
  const shouldHideAside = segments.includes("imports") && segments.length > 2;

  return (
    <div className="flex h-full w-full">
      {!shouldHideAside && (
        <aside className="border-border-tertiary-opaque sticky top-0 h-screen w-72 shrink-0 border-r">
          <div className="flex h-14 items-center justify-between px-6">
            <h2 className="text-title-xs font-semibold">Datasets</h2>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost">
                <Search16 />
              </Button>
              <Button size="icon" variant="ghost">
                <Add16 />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-0.5 px-3 py-2">
            {[...Array(10)].map((_, i) => {
              const isActive = pathname === `/datasets/${i}`;
              return (
                <Link key={i} href={`/datasets/${i}`}>
                  <div
                    className={`hover:bg-fill-tertiary-hover active:bg-fill-tertiary-active relative rounded-md px-3 transition ${
                      isActive
                        ? "bg-fill-tertiary-active"
                        : "bg-fill-transparent"
                    }`}
                  >
                    <div className="text-body-md flex flex-col py-3">
                      <div>Dataset name {i}</div>
                      <div className="text-fg-secondary">
                        Dataset description
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
        </aside>
      )}
      {children}
    </div>
  );
}
