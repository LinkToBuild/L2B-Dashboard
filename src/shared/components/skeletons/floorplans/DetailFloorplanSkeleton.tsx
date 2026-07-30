import { cn } from "@/lib/utils";
import { StatCardSkeleton } from "../StatCardSkeleton";
import { TableSkeleton } from "../TableSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Mirrors Vendor Individual body under ProfileHeader:
 * Overview toolbar + 5 StatCards → Booking & Earnings → Detailed Bookings
 */
export function DetailFloorplanSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("flex w-full flex-col gap-[30px]", className)} aria-busy>
      {/* OverviewSection + InfoCards */}
      <div className="flex flex-col gap-[6px]">
        <div className="flex h-[52px] items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-7 w-28" />
            <Skeleton className="h-3 w-64" />
          </div>
          <div className="flex items-center gap-[22px]">
            <Skeleton className="h-9 w-28 rounded-[4px]" />
            <Skeleton className="h-9 w-28 rounded-[4px]" />
            <Skeleton className="h-9 w-28 rounded-[4px]" />
          </div>
        </div>
        <div className="flex w-full justify-between gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <StatCardSkeleton key={i} className="min-w-0 flex-1" />
          ))}
        </div>
      </div>

      {/* Booking & Earnings */}
      <div className="flex flex-col gap-[19px]">
        <div className="flex items-center gap-4">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-4 w-4 rounded-full" />
        </div>
        <div className="flex gap-[10px]">
          <div className="flex w-[30%] gap-[12px]">
            <Skeleton className="h-[247px] w-[247px] shrink-0 rounded-full" />
            <div className="flex h-[108px] w-[144px] flex-col gap-[12px]">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
          <div className="w-1/3">
            <Skeleton className="h-[241px] w-full rounded-[12px]" />
          </div>
          <div className="w-1/3">
            <Skeleton className="h-[241px] w-full rounded-[12px]" />
          </div>
        </div>
      </div>

      {/* Detailed Bookings */}
      <TableSkeleton rows={8} />
    </div>
  );
}
