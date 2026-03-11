"use client";

import React, { useState } from "react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import { Stats } from "fs";
import { TableToolBar } from "@/shared/components/TableToolBar";

export function TicketMetricsWidget() {
  return (
    <>
      <div className="flex w-full">
        <div className="w-full">
          <TableToolBar title="Overall Ticket" showSearch={false}>
          </TableToolBar>
        </div>
        <div>
            <div></div>
            {/* <div>StatsCard</div> */}
        </div>
      </div>
    </>
  );
}
