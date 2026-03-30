import { PFScreen } from "@/features/paymentandfinance/screen/PFScreen";
import { Suspense } from "react";

export default function PFPage() {
  return (
    <div className="px-8 py-5    min-h-screen bg-[#F8F9FA]">
      <Suspense
        fallback={
          <div className="p-8 text-neutral-3">Loading dashboard...</div>
        }
      >
        <PFScreen></PFScreen>
      </Suspense>
    </div>
  );
}
