import { OverviewFloorplanSkeleton } from "./floorplans/OverviewFloorplanSkeleton";

/**
 * @deprecated Prefer a named floorplan skeleton
 * (Overview / Vendor / Ops / Analytics / Tickets / Detail).
 * Kept as alias of Overview for generic route `loading.tsx`.
 */
export function DashboardPageSkeleton({
  showHeader = true,
  className,
}: {
  showHeader?: boolean;
  className?: string;
}) {
  return (
    <OverviewFloorplanSkeleton showHeader={showHeader} className={className} />
  );
}
