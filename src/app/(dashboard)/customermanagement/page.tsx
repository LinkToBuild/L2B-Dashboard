import { CustomerScreen } from "@/features/customermanagement/screen/CustomerScreen";
import CustomerIndividualScreen from "@/features/customermanagement/screen/CustomerIndividualScreen";
import { Suspense } from "react";
import { DashboardPageShell } from "@/shared/components/DashboardPageShell";
import {
  CustomerDetailFloorplanSkeleton,
  ProfileHeaderSkeleton,
} from "@/shared/components/skeletons";

export default function CustomerManagementPage() {
  return (
    <DashboardPageShell>
      <Suspense
        fallback={
          <div className="flex flex-col gap-[30px]">
            <ProfileHeaderSkeleton />
            <CustomerDetailFloorplanSkeleton />
          </div>
        }
      >
        <CustomerScreen />
        {/* <CustomerIndividualScreen /> */}
      </Suspense>
    </DashboardPageShell>
  );
}
