import { Button } from "@/components/ui/button";
import { Edit2 } from "lucide-react";
import {
  Add16,
  ArrowUpFilled20,
  ArrowUpload16,
  Edit16,
  Grid16,
  History16,
} from "@/components/icons";

import DatasetSheets from "./DatasetSheets";

export default async function DatasetDetailPage({
  params,
}: {
  params: { datasetId: string };
}) {
  const { datasetId } = await params;
  const isEven = Number(datasetId) % 2 === 0;
  return (
    <div className="flex flex-col w-full min-w-0">
      <div className="flex justify-between px-12 py-4">
        <div className="flex flex-col gap-2 py-0.5">
          <h3 className="font-semibold text-title-xs">
            Dataset name {datasetId}
          </h3>
          <p className="text-fg-secondary text-body-md-tall">
            Dataset description
          </p>
        </div>
        <div className="flex gap-2 flex-row-reverse">
          <Button size="sm">
            <ArrowUpload16 />
            Import data
          </Button>
          <Button variant="ghost" size="icon">
            <Edit16 />
          </Button>
          <Button variant="ghost" size="icon">
            <History16 />
          </Button>
          <Button variant="ghost" size="icon">
            <Grid16 />
          </Button>
        </div>
      </div>

      {isEven ? (
        <div className="px-12 pt-24">
          <div className="flex flex-col max-w-120 mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col gap-1">
              <span className="text-body-sm text-fg-tertiary">Step 1</span>
              <h4 className="text-body-lg font-semibold">
                Download a template
              </h4>
              <div className="flex w-full bg-bg-secondary border border-border-tertiary rounded-lg mt-2 overflow-hidden">
                <div className="flex flex-col gap-2 px-4 py-3 hover:bg-fill-secondary-hover bg-fill-transparent">
                  <div className="size-6 bg-orange-800"></div>
                  <p className="text-body-sm font-semibold">
                    Demand forecasting
                  </p>
                </div>
                <div className="flex flex-col gap-2 px-4 py-3 hover:bg-fill-secondary-hover bg-fill-transparent">
                  <div className="size-6 bg-orange-800"></div>
                  <p className="text-body-sm font-semibold">
                    Inventory optimization
                  </p>
                </div>
                <div className="flex flex-col gap-2 px-4 py-3 hover:bg-fill-secondary-hover bg-fill-transparent">
                  <div className="size-6 bg-orange-800"></div>
                  <p className="text-body-sm font-semibold">
                    Pricing optimization
                  </p>
                </div>
                <div className="flex flex-col gap-2 px-4 py-3 hover:bg-fill-secondary-hover bg-fill-transparent">
                  <div className="size-6 bg-orange-800"></div>
                  <p className="text-body-sm font-semibold">Supply planning</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col gap-1 mt-8">
              <span className="text-body-sm text-fg-tertiary">Step 2</span>
              <h4 className="text-body-lg font-semibold">Import data</h4>
              <div className="flex w-full bg-bg-secondary border border-border-tertiary rounded-lg my-2 items-center justify-center gap-6 p-6 border-dashed">
                <div className="size-12 bg-fill-primary rounded-full flex items-center justify-center">
                  <ArrowUpFilled20 />
                </div>
                <p className="text-body-md font-semibold">
                  Click to select files <br />
                  <span className="text-fg-secondary text-body-md-tall font-normal mt-0.5">
                    or drag and drop it here
                  </span>
                </p>
              </div>
              <Button disabled>Import</Button>
            </div>
          </div>
        </div>
      ) : (
        <DatasetSheets datasetId={datasetId} />
      )}
    </div>
  );
}

// export default function DatasetDetailPage({
//   params,
// }: {
//   params: { datasetId: string };
// }) {
//   const { datasetId } = params;

//   // Simulate fetching dataset data (replace with real fetch)
//   const dataset = {
//     id: datasetId,
//     title: "121121",
//     status: "Overdue",
//     subdatasetOf: "ANV-10 testtt",
//   };

//   if (!dataset) return notFound();

//   return (
//     <div>
//       <h1 className="text-2xl font-semibold">{dataset.title}</h1>
//       <p className="text-sm text-muted-foreground">
//         Sub-dataset of {dataset.subdatasetOf}
//       </p>
//       <div className="mt-4">
//         Status: <strong>{dataset.status}</strong>
//       </div>
//     </div>
//   );
// }
