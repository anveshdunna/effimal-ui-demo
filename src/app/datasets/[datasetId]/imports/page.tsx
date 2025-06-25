"use client";

import { ChevronRight16, MoreHorizontal16 } from "@/components/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ImportsPage() {
  const pathname = usePathname();
  const parentPath = pathname.split("/").slice(0, -1).join("/");

  return (
    <div className="flex w-full min-w-0 flex-col">
      <div className="flex justify-start px-12 py-4">
        <div className="-ml-2">
          <Breadcrumb>
            <BreadcrumbList className="text-body-lg font-semibold">
              <BreadcrumbItem>
                <BreadcrumbLink href={parentPath}>Dataset name</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight16 />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold">
                  Import history
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="mx-12 mt-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-0">Name</TableHead>
              <TableHead>Mapped engine</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="p-0 pr-1 text-right" />
            </TableRow>
          </TableHeader>

          <TableBody>
            {imports.map((x) => (
              <TableRow key={x.id}>
                <TableCell className="pl-0">
                  <Link href={`${pathname}/${encodeURIComponent(x.name)}`}>
                    {x.name}
                  </Link>
                </TableCell>
                <TableCell>{x.mappedEngine}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5">
                    <div
                      className={`size-1.5 rounded-full ${x.status === "Processing" ? "bg-fg-tertiary" : x.status === "Processed" ? "bg-fg-success" : "bg-fg-critical"}`}
                    ></div>
                    {x.status}
                  </div>
                </TableCell>
                <TableCell>{x.created}</TableCell>
                <TableCell className="p-0 pr-1 text-right">
                  <Button size="icon" variant="ghost">
                    <MoreHorizontal16 />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

const imports = [
  {
    id: 1,
    name: "filename_optim.xlsx",
    status: "Processing",
    created: "Apr 30",
    mappedEngine: "Inventory optimization",
  },
  {
    id: 2,
    name: "filename_optim_pricing.xlsx",
    status: "Processed",
    created: "Mar 3",
    mappedEngine: "Pricing optimization",
  },
  {
    id: 3,
    name: "filename_optim_demand.xlsx",
    status: "Processed",
    created: "Mar 2",
    mappedEngine: "Demand forecasting",
  },
  {
    id: 4,
    name: "synthetic_data.xlsx",
    status: "Failed",
    created: "Feb 19",
    mappedEngine: "Pricing optimization",
  },
];
