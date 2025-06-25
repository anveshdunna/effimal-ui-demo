import { CheckCircleFilled16 } from "@/components/icons";
import SheetSet1 from "../../SheetSet1";

export default function File2() {
  return (
    <>
      <div className="mx-12 mt-4 mb-6 flex flex-col gap-6">
        <div className="text-body-md flex gap-12">
          <div className="flex max-w-40 flex-1 flex-col gap-1">
            <p className="text-fg-secondary">Status</p>
            <div className="flex items-center gap-1.5">
              <div className="bg-fg-success size-1.5 rounded-full"></div>
              Processed
            </div>
          </div>
          <div className="flex max-w-40 flex-1 flex-col gap-1">
            <p className="text-fg-secondary">Created</p>
            <p className="">Mar 3, 2025, 3:00 PM</p>
          </div>
          <div className="flex max-w-40 flex-1 flex-col gap-1">
            <p className="text-fg-secondary">Processed</p>
            <p className="">Mar 3, 2025, 3:10 PM</p>
          </div>
          <div className="flex max-w-40 flex-1 flex-col gap-1">
            <p className="text-fg-secondary">Imported</p>
            <div className="flex items-center gap-1.5">
              <CheckCircleFilled16 className="text-fg-success" />
              200 records
            </div>
          </div>
          <div className="flex max-w-40 flex-1 flex-col gap-1">
            <p className="text-fg-secondary">Failed</p>
            <p className="">None</p>
          </div>
        </div>
      </div>
      <SheetSet1 />
    </>
  );
}
