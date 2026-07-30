import { CustomerScreen } from "@/features/customermanagement/screen/CustomerScreen";
import { Suspense } from "react";
import { DashboardPageShell } from "@/shared/components/DashboardPageShell";

export default function CustomerManagementPage() {
  return (
    <DashboardPageShell>
      <Suspense
        fallback={
          <div className="flex w-full items-center justify-center p-10 text-neutral-500">
            Loading Dashboard...
          </div>
        }
      >
        <CustomerScreen />
      </Suspense>
    </DashboardPageShell>
  );
}
