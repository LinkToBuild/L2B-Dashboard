import { Suspense } from "react";
import VendorIndividualScreen from "@/features/vendormanagement/screen/VendorIndividualScreen";

export default function VendorIndividualPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  // params.id will be whatever is in the URL (e.g., "ADC12233214")
  
  return (
    <div className="px-8 py-5 min-h-screen bg-[#F8F9FA] ">
      <Suspense fallback={<div className="p-8 text-neutral-3">Loading vendor profile...</div>}>
        {/* You can pass the ID down to your ViewModel later to fetch specific data! */}
        <VendorIndividualScreen vendorId={params.id} />
      </Suspense>
    </div>
  );
}