"use client";

import { ChevronRight16 } from "@/components/icons";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { useParams } from "next/navigation";
import File1 from "./File1";
import File2 from "./File2";
import File3 from "./File3";
import File4 from "./File4";

export default function FileDetailsPage() {
  const params = useParams();
  const filename = decodeURIComponent(params.filename as string);
  return (
    <div className="flex w-full min-w-0 flex-col">
      <div className="flex justify-start px-12 py-4">
        <div className="-ml-2">
          <Breadcrumb>
            <BreadcrumbList className="text-body-lg font-semibold">
              <BreadcrumbItem>
                <BreadcrumbLink href="../">Dataset name</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight16 />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="./">Import history</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight16 />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold">
                  File name
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      {filename === "filename_optim.xlsx" && <File1 />}
      {filename === "filename_optim_pricing.xlsx" && <File2 />}
      {filename === "filename_optim_demand.xlsx" && <File3 />}
      {filename === "synthetic_data.xlsx" && <File4 />}
    </div>
  );
}
