"use client";

import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/tab-nav";
import SheetSet1 from "./SheetSet1";
import SheetSet2 from "./SheetSet2";

export default function DatasetSheets({ datasetId }: { datasetId: string }) {
  const [sheetId, setSheetId] = useState<string>("101");

  useEffect(() => {
    console.log("Is sheetId === '101'?", sheetId === "101");
    const readIdFromHash = () => {
      const match = window.location.hash.match(/id=(\d+)/);
      setSheetId(match ? match[1] : "101");
    };

    readIdFromHash(); // on mount
    window.addEventListener("hashchange", readIdFromHash);
    return () => window.removeEventListener("hashchange", readIdFromHash);
  }, []);

  return (
    <>
      <div className="shadow-border-bottom px-12">
        <NavigationMenu className="-mx-3">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#id=101"
              active={sheetId === "101"}
              datasetId={datasetId}
            >
              Demand forecasting/ Pricing optimization
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#id=202"
              active={sheetId === "202"}
              datasetId={datasetId}
            >
              Inventory optimization
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenu>
      </div>

      {sheetId === "101" && (
        <div className="mb-6 w-full">
          <SheetSet1 />
        </div>
      )}
      {sheetId === "202" && (
        <div className="mb-6 w-full">
          <SheetSet2 />
        </div>
      )}
    </>
  );
}
