import { GBScreen } from "@/features/growthandbehaviour/screen/GBScreen";
import { Suspense } from "react";
import { DashboardPageShell } from "@/shared/components/DashboardPageShell";

export default function GBPage() {
  return (
    <DashboardPageShell>
      <Suspense
        fallback={
          <div className="p-8 text-neutral-3">Loading dashboard...</div>
        }
      >
        <GBScreen />
      </Suspense>
    </DashboardPageShell>
  );
}
