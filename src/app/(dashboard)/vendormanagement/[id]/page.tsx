import { Suspense } from "react";
import VendorIndividualScreen from "@/features/vendormanagement/screen/VendorIndividualScreen";
import { DashboardPageShell } from "@/shared/components/DashboardPageShell";
import { DetailFloorplanSkeleton, ProfileHeaderSkeleton } from "@/shared/components/skeletons";

export default function VendorIndividualPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <DashboardPageShell>
      <Suspense
        fallback={
          <div className="flex flex-col gap-[30px]">
            <ProfileHeaderSkeleton />
            <DetailFloorplanSkeleton />
          </div>
        }
      >
        <VendorIndividualScreen vendorId={params.id} />
      </Suspense>
    </DashboardPageShell>
  );
}
