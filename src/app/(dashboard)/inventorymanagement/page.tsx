import { InventoryScreen } from "@/features/inventorymanagement/screen/InventoryScreen";
import { Suspense } from "react";
import { DashboardPageShell } from "@/shared/components/DashboardPageShell";
import { OpsListFloorplanSkeleton } from "@/shared/components/skeletons";

export default function InventoryManagementPage() {
  return (
    <DashboardPageShell>
      <Suspense fallback={<OpsListFloorplanSkeleton showHeader={false} />}>
        <InventoryScreen />
      </Suspense>
    </DashboardPageShell>
  );
}
