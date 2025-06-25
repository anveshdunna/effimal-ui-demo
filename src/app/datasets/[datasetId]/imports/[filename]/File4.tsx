import { ErrorCircleFilled16 } from "@/components/icons";

export default function File4() {
  return (
    <>
      <div className="mx-12 mt-4 mb-6 flex flex-col gap-6">
        <div className="text-body-md flex gap-12">
          <div className="flex max-w-40 flex-1 flex-col gap-1">
            <p className="text-fg-secondary">Status</p>
            <div className="flex items-center gap-1.5">
              <div className="bg-fg-critical size-1.5 rounded-full"></div>
              Failed
            </div>
          </div>
          <div className="flex max-w-40 flex-1 flex-col gap-1">
            <p className="text-fg-secondary">Created</p>
            <p className="">Feb 19, 2025, 3:00 PM</p>
          </div>

          <div className="flex max-w-40 flex-1 flex-col gap-1">
            <p className="text-fg-secondary">Failed</p>
            <div className="flex items-center gap-1.5">
              <ErrorCircleFilled16 className="text-fg-critical" />
              <span className="underline">250 records</span>
            </div>
          </div>
        </div>
        <div className="bg-border-tertiary h-px">
          <div className="bg-fg-critical h-px w-full"></div>
        </div>
        <div className="text-title-xs font-semibold">Failed error message</div>
      </div>
    </>
  );
}
