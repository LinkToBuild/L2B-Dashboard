import React from "react";
import OrderScreen from "@/features/ordersandoperation/screen/OrderScreen";
import { Suspense } from "react";

export default function page() {
  return (
    <div className="px-8 py-5    min-h-screen bg-[#F8F9FA]">
      <Suspense
        fallback={
          <div className="p-8 text-neutral-3">Loading dashboard...</div>
        }
      >
        <OrderScreen></OrderScreen>
      </Suspense>
    </div>
  );
}
