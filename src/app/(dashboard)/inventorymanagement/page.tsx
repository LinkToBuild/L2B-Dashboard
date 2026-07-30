import { InventoryScreen } from "@/features/inventorymanagement/screen/InventoryScreen";
import { Suspense } from "react";
import { DashboardPageShell } from "@/shared/components/DashboardPageShell";

export default function InventoryManagementPage() {
  return (
    <DashboardPageShell>
      <Suspense
        fallback={
          <div className="p-8 text-neutral-3">Loading dashboard...</div>
        }
      >
        <InventoryScreen />
      </Suspense>
    </DashboardPageShell>
  );
}
