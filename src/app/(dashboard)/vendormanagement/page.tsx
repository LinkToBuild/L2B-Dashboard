import { VendorScreen } from "@/features/vendormanagement/screen/VendorScreen";
import VendorIndividualScreen from "@/features/vendormanagement/screen/VendorIndividualScreen";

export default function VendorManagementPage() {
  return (
    <div className="px-8 py-5 min-h-screen bg-[#F8F9FA]">
      <VendorScreen />;
      {/* <VendorIndividualScreen></VendorIndividualScreen> */}
    </div>
  );
}
