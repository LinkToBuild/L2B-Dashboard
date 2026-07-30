import { PFScreen } from "@/features/paymentandfinance/screen/PFScreen";
import { Suspense } from "react";
import { DashboardPageShell } from "@/shared/components/DashboardPageShell";

export default function PFPage() {
  return (
    <DashboardPageShell>
      <Suspense
        fallback={
          <div className="p-8 text-neutral-3">Loading dashboard...</div>
        }
      >
        <PFScreen />
      </Suspense>
    </DashboardPageShell>
  );
}
