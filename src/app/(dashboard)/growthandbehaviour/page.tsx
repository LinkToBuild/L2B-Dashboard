import { GBScreen } from "@/features/growthandbehaviour/screen/GBScreen";
import { Suspense } from "react";
import { DashboardPageShell } from "@/shared/components/DashboardPageShell";
import { GrowthFloorplanSkeleton } from "@/shared/components/skeletons";

export default function GBPage() {
  return (
    <DashboardPageShell>
      <Suspense fallback={<GrowthFloorplanSkeleton />}>
        <GBScreen />
      </Suspense>
    </DashboardPageShell>
  );
}
