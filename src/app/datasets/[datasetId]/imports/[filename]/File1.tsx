export default function File1() {
  return (
    <div className="mx-12 mt-4 flex flex-col gap-6">
      <div className="text-body-md flex gap-12">
        <div className="flex max-w-40 flex-1 flex-col gap-1">
          <p className="text-fg-secondary">Status</p>
          <div className="flex items-center gap-1.5">
            <div className="bg-fg-tertiary size-1.5 rounded-full"></div>
            Processing
          </div>
        </div>
        <div className="flex max-w-40 flex-1 flex-col gap-1">
          <p className="text-fg-secondary">Created</p>
          <p className="">Apr 30, 2025, 3:00 PM</p>
        </div>
      </div>
      <div className="bg-border-tertiary h-px">
        <div className="bg-fg-success h-px w-4/6"></div>
      </div>
      <div className="text-title-xs font-semibold">Processing... (66%)</div>
    </div>
  );
}
