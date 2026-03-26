import { Suspense } from "react";
import {VendorScreen} from "@/features/vendormanagement/screen/VendorScreen";

export default function VendorManagementPage() {
  return (
    <div className="px-8 py-5 min-h-screen bg-[#F8F9FA]">
      <Suspense fallback={<div className="p-8 text-neutral-3">Loading dashboard...</div>}>
        <VendorScreen />
      </Suspense>
    </div>
  );
}