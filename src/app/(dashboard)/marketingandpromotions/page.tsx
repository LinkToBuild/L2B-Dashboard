import { MPScreen } from "@/features/marketingandpromotion/screen/MPScreen";
import { Suspense } from "react";

export default function MPPage() {
  return (
    <div className="px-8 py-5    min-h-screen bg-[#F8F9FA]">
      <Suspense
        fallback={
          <div className="p-8 text-neutral-3">Loading dashboard...</div>
        }
      >
        <MPScreen></MPScreen>
      </Suspense>
    </div>
  );
}
