import React from "react";
import OrderScreen from "@/features/ordersandoperation/screen/OrderScreen";
import { Suspense } from "react";
import { DashboardPageShell } from "@/shared/components/DashboardPageShell";
import { OrdersFloorplanSkeleton } from "@/shared/components/skeletons";

export default function page() {
  return (
    <DashboardPageShell>
      <Suspense fallback={<OrdersFloorplanSkeleton showHeader={false} />}>
        <OrderScreen />
      </Suspense>
    </DashboardPageShell>
  );
}
