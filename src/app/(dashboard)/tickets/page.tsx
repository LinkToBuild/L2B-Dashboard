"use client";

import * as React from "react";
import { TicketScreen } from "@/features/tickets/screen/TicketScreen";
import { DashboardPageShell } from "@/shared/components/DashboardPageShell";

export default function TicketPage() {
  return (
    <DashboardPageShell>
      <TicketScreen />
    </DashboardPageShell>
  );
}
