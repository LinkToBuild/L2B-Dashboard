import { Suspense } from "react";
import VendorIndividualScreen from "@/features/vendormanagement/screen/VendorIndividualScreen";
import { DashboardPageShell } from "@/shared/components/DashboardPageShell";

export default function VendorIndividualPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <DashboardPageShell>
      <Suspense
        fallback={
          <div className="p-8 text-neutral-3">Loading vendor profile...</div>
        }
      >
        <VendorIndividualScreen vendorId={params.id} />
      </Suspense>
    </DashboardPageShell>
  );
}
