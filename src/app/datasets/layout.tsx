"use client";

import { Add16, MoreHorizontal16, Search16, Grid16 } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function datasetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="w-full h-full flex">
      <aside className="w-72 shadow-border-right shrink-0">
        <div className="h-14 flex justify-between items-center px-6">
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
        <div className="flex flex-col px-3 py-2 gap-0.5">
          {[...Array(10)].map((_, i) => {
            const isActive = pathname === `/datasets/${i}`;
            return (
              <Link key={i} href={`/datasets/${i}`}>
                <div
                  className={`px-3 relative hover:bg-fill-tertiary-hover active:bg-fill-tertiary-active transition rounded-md ${
                    isActive ? "bg-fill-tertiary-active" : "bg-fill-transparent"
                  }`}
                >
                  <div className="flex flex-col text-body-md py-3">
                    <div>Dataset name {i}</div>
                    <div className="text-fg-secondary">Dataset description</div>
                  </div>
                  <Button
                    className="top-2 right-3 absolute"
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
      {children}
    </div>
  );
}
