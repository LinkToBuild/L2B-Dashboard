import { MPScreen } from "@/features/marketingandpromotion/screen/MPScreen";
import { Suspense } from "react";
import { DashboardPageShell } from "@/shared/components/DashboardPageShell";

export default function MPPage() {
  return (
    <DashboardPageShell>
      <Suspense
        fallback={
          <div className="p-8 text-neutral-3">Loading dashboard...</div>
        }
      >
        <MPScreen />
      </Suspense>
    </DashboardPageShell>
  );
}
