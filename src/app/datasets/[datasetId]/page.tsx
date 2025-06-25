import { Button } from "@/components/ui/button";
import { ArrowUpload16, Edit16, Grid16, History16 } from "@/components/icons";

import DatasetSheets from "./DatasetSheets";
import FileUploadSection from "./FileUploadSection";

export default async function DatasetDetailPage({
  params,
}: {
  params: { datasetId: string };
}) {
  const { datasetId } = await params;
  const isEven = Number(datasetId) % 2 === 0;

  return (
    <div className="flex w-full min-w-0 flex-col">
      <div className="flex justify-between px-12 py-4">
        <div className="flex flex-col gap-2 py-0.5">
          <h3 className="text-title-xs font-semibold">
            Dataset name {datasetId}
          </h3>
          <p className="text-fg-secondary text-body-md-tall">
            Dataset description
          </p>
        </div>
        <div className="flex flex-row-reverse gap-2">
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
          <div className="mx-auto flex max-w-120 flex-col">
            {/* Step 1 */}
            <div className="flex flex-col gap-1">
              <span className="text-body-sm text-fg-tertiary">Step 1</span>
              <h4 className="text-body-lg font-semibold">
                Download a template
              </h4>
              <div className="bg-bg-secondary border-border-tertiary mt-2 flex w-full overflow-hidden rounded-lg border">
                <div className="hover:bg-fill-secondary-hover bg-fill-transparent flex flex-col gap-2 px-4 py-3">
                  <div className="size-6 bg-orange-800"></div>
                  <p className="text-body-sm font-semibold">
                    Demand forecasting
                  </p>
                </div>
                <div className="hover:bg-fill-secondary-hover bg-fill-transparent flex flex-col gap-2 px-4 py-3">
                  <div className="size-6 bg-orange-800"></div>
                  <p className="text-body-sm font-semibold">
                    Inventory optimization
                  </p>
                </div>
                <div className="hover:bg-fill-secondary-hover bg-fill-transparent flex flex-col gap-2 px-4 py-3">
                  <div className="size-6 bg-orange-800"></div>
                  <p className="text-body-sm font-semibold">
                    Pricing optimization
                  </p>
                </div>
                <div className="hover:bg-fill-secondary-hover bg-fill-transparent flex flex-col gap-2 px-4 py-3">
                  <div className="size-6 bg-orange-800"></div>
                  <p className="text-body-sm font-semibold">Supply planning</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mt-8 flex flex-col gap-1">
              <span className="text-body-sm text-fg-tertiary">Step 2</span>
              <h4 className="text-body-lg font-semibold">Import data</h4>

              {/* File uploader */}
              <FileUploadSection datasetName={`Dataset name ${datasetId}`} />
            </div>
          </div>
        </div>
      ) : (
        <DatasetSheets datasetId={datasetId} />
      )}
    </div>
  );
}
