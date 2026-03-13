import { CustomerScreen } from "@/features/customermanagement/screen/CustomerScreen";
import CustomerIndividualScreen from "@/features/customermanagement/screen/CustomerIndividualScreen";

export default function CustomerManagementPage() {
  return (
    <div className="px-8 py-5    min-h-screen bg-[#F8F9FA]">
      {/* <CustomerScreen /> */}
      <CustomerIndividualScreen></CustomerIndividualScreen>
    </div>
  );
}