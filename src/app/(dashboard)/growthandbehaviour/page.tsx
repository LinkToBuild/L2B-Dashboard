import { GBScreen } from "@/features/growthandbehaviour/screen/GBScreen";
import { Suspense } from "react";

export default function GBPage() {
  return (
    <div className="px-8 py-5    min-h-screen bg-[#F8F9FA]">
      <Suspense
        fallback={
          <div className="p-8 text-neutral-3">Loading dashboard...</div>
        }
      >
        <GBScreen></GBScreen>
      </Suspense>
    </div>
  );
}
