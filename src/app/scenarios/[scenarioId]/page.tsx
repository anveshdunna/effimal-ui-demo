import { Button } from "@/components/ui/button";
import { ChevronLeftAlt16, Edit16 } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Steps from "./Steps";

export default async function ScenarioDetailPage(props: {
  params: Promise<{ scenarioId: string }>;
}) {
  const { scenarioId } = await props.params;

  return (
    <div className="flex w-full min-w-0 flex-col">
      {/* Header */}
      <div className="grid grid-cols-[min-content_auto_min-content] gap-x-8 gap-y-4 px-6 py-4 lg:px-12">
        <div className="col-start-1 row-start-1 -ml-1.5 flex items-center gap-2 lg:hidden">
          <SidebarTrigger />
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-3"
          />
          <Button variant="ghost" size="icon" asChild>
            <Link href="/scenarios">
              <ChevronLeftAlt16 />
            </Link>
          </Button>
        </div>
        <div className="col-span-full row-start-2 my-0.5 flex flex-col gap-2 lg:col-start-1 lg:col-end-3 lg:row-start-1">
          <h3 className="text-title-xs font-semibold">
            Scenario name {scenarioId}
          </h3>
          <p className="text-fg-secondary text-body-md-tall">
            Scenario description can be pretty lengthy. Lets see how it works.
          </p>
        </div>
        <div className="col-start-3 row-start-1 flex items-center self-start justify-self-end">
          <Button variant="ghost" size="icon">
            <Edit16 />
          </Button>
        </div>
      </div>

      <div className="px-6 lg:px-12">
        <div className="flex flex-col gap-1">
          <div className="bg-bg-secondary border-border-tertiary mt-4 flex w-full flex-col items-start overflow-hidden rounded-lg border p-4">
            <p className="text-body-md font-semibold">Pricing optimization</p>
            {/* <div className="mt-6 mb-4 flex"></div>
            <div className="text-body-md flex items-center gap-2">
              <div className="size-3 rounded-full bg-red-500"></div>
              <div>Select dataset</div>
            </div> */}
            <div className="mt-6 mb-4 flex">
              <Steps steps={steps} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    step: 1,
    description: "Select dataset",
    status: "wait",
    content: <SelectDataset />,
  },
  {
    step: 2,
    description: "Computing dataset",
    status: "progress",
  },
  {
    step: 3,
    description: "Analyzing forecast",
    status: "progress",
  },
  {
    step: 4,
    description: "Set parameters",
    status: "wait",
    content: <div>Form fields for setting parameters</div>,
  },
  {
    step: 5,
    description: "Optimizing pricing",
    status: "progress",
  },
  {
    step: 6,
    description: "Analyzing pricing",
    status: "progress",
  },
];

function SelectDataset() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Dataset 1</SelectItem>
        <SelectItem value="dark">Dataset 2</SelectItem>
        <SelectItem value="system">Dataset 3</SelectItem>
      </SelectContent>
    </Select>
  );
}
