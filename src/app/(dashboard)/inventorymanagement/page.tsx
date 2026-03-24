import { InventoryScreen } from "@/features/inventorymanagement/screen/InventoryScreen";
import { Suspense } from "react";

export default function InventoryManagementPage() {
  return (
    <div className="px-8 py-5    min-h-screen bg-[#F8F9FA]">
     
       <Suspense
              fallback={
                <div className="p-8 text-neutral-3">Loading dashboard...</div>
              }
            >
               <InventoryScreen></InventoryScreen>
            </Suspense>
    </div>
  );
}
