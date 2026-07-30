import React from "react";
import { AgentScreen } from "@/features/agentsprofile/screen/AgentScreen";
import { DashboardPageShell } from "@/shared/components/DashboardPageShell";

export default function page() {
  return (
    <DashboardPageShell className="bg-transparent">
      <AgentScreen userLevel="L2" userId="ADC1223" />
    </DashboardPageShell>
  );
}
