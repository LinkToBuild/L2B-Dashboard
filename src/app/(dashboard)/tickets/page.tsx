"use client";

import * as React from "react";
import { TicketScreen } from "@/features/tickets/screen/TicketScreen";
import { Suspense } from "react";
import { DashboardPageShell } from "@/shared/components/DashboardPageShell";
import { TicketsFloorplanSkeleton } from "@/shared/components/skeletons";

export default function TicketPage() {
  return (
    <DashboardPageShell>
      <Suspense fallback={<TicketsFloorplanSkeleton />}>
        <TicketScreen />
      </Suspense>
    </DashboardPageShell>
  );
}
