import { MPScreen } from "@/features/marketingandpromotion/screen/MPScreen";
import { Suspense } from "react";
import { DashboardPageShell } from "@/shared/components/DashboardPageShell";
import { AnalyticsFloorplanSkeleton } from "@/shared/components/skeletons";

export default function MPPage() {
  return (
    <DashboardPageShell>
      <Suspense
        fallback={
          <AnalyticsFloorplanSkeleton showHeader={false} variant="marketing" />
        }
      >
        <MPScreen />
      </Suspense>
    </DashboardPageShell>
  );
}
