"use client";

import * as React from "react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { TableToolBar } from "@/shared/components/TableToolBar";
import { DataTableWidget } from "@/shared/components/DataTableWidget";
import { ColumnConfig } from "@/shared/components/Table";
import { TicketMetricsWidget } from "../components/overall/TicketMetricsWidget";

export function TicketScreen() {

  return (
    <>
      <div className="flex flex-col gap-6 md:w-[90%] xl:w-[91%] 2xl:w-[93%]  ">
       <SectionWrapper className="border-2 border-red-500">
        <div className="flex">
          <div className="w-1/2 border-2">
            <TicketMetricsWidget />
          </div>
          {/* <div></div> */}
        </div>
       </SectionWrapper>
      </div>
    </>
  );
}
