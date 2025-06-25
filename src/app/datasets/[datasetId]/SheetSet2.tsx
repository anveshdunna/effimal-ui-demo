import {
  TabsClassic,
  TabsClassicList,
  TabsClassicTrigger,
  TabsClassicContent,
} from "@/components/ui/tabs-classic"; // adjust path if needed
import Table1 from "./Table1";
import Table2 from "./Table2";

export default function SheetSet2() {
  return (
    <div className="overflow-x-hidden">
      <TabsClassic defaultValue="locations" className="w-full">
        <TabsClassicList className="px-12">
          <TabsClassicTrigger value="locations">Locations</TabsClassicTrigger>
          <TabsClassicTrigger value="services">Services</TabsClassicTrigger>
        </TabsClassicList>

        <TabsClassicContent value="locations">
          <div className="text-body-sm text-fg-secondary bg-bg-secondary px-12 py-4">
            25 rows
          </div>
          <Table2 />
        </TabsClassicContent>

        <TabsClassicContent value="services">
          <div className="text-body-sm text-fg-secondary bg-bg-secondary px-12 py-4">
            15 rows
          </div>
          <Table1 />
        </TabsClassicContent>
      </TabsClassic>
    </div>
  );
}
