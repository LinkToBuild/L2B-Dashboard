import React from "react";
import OrderScreen from "@/features/ordersandoperation/screen/OrderScreen";
import { Suspense } from "react";
import { DashboardPageShell } from "@/shared/components/DashboardPageShell";

export default function page() {
  return (
    <DashboardPageShell>
      <Suspense
        fallback={
          <div className="p-8 text-neutral-3">Loading dashboard...</div>
        }
      >
        <OrderScreen />
      </Suspense>
    </DashboardPageShell>
  );
}
