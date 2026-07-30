import { PFScreen } from "@/features/paymentandfinance/screen/PFScreen";
import { Suspense } from "react";
import { DashboardPageShell } from "@/shared/components/DashboardPageShell";
import { AnalyticsFloorplanSkeleton } from "@/shared/components/skeletons";

export default function PFPage() {
  return (
    <DashboardPageShell>
      <Suspense fallback={<AnalyticsFloorplanSkeleton variant="payment" />}>
        <PFScreen />
      </Suspense>
    </DashboardPageShell>
  );
}
