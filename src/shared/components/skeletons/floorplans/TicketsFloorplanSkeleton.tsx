import { cn } from "@/lib/utils";
import { StatCardSkeleton } from "../StatCardSkeleton";
import { TableSkeleton } from "../TableSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Mirrors Tickets screen:
 * left: Overall Ticket toolbar + donut/area + stacked StatCards
 * right: Department Performance + Escalated Ticket tables
 * bottom: All Tickets table
 */
export function TicketsFloorplanSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("flex w-full flex-col gap-[40px]", className)} aria-busy>
      <div className="flex w-full">
        {/* TicketMetricsWidget — w-1/2 */}
        <div className="flex w-1/2 flex-col gap-[38px]">
          <div className="flex w-full items-center justify-between">
            <Skeleton className="h-6 w-36" />
            <Skeleton className="h-9 w-28 rounded-lg" />
          </div>

          <div className="flex w-full">
            <div className="flex w-1/2 flex-col gap-[18px]">
              <Skeleton className="mx-auto h-[320px] w-[320px] max-w-full rounded-full" />
              <div className="flex w-full flex-col gap-[18px] p-[12px]">
                <div className="flex w-full items-center justify-between">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-14" />
                  <Skeleton className="h-4 w-4 rounded-full" />
                </div>
                <Skeleton className="h-[130px] w-full rounded-lg" />
              </div>
            </div>

            <div className="flex w-1/2 flex-col items-center xl:gap-[10px] 2xl:gap-[40px]">
              {Array.from({ length: 4 }).map((_, i) => (
                <StatCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>

        {/* SummaryTableWidget — w-1/2 */}
        <div className="flex w-1/2 flex-col justify-between px-[16px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-4">
              <Skeleton className="h-7 w-56" />
              <Skeleton className="h-4 w-4 rounded-full" />
            </div>
            <div className="overflow-hidden rounded-[12px] border border-neutral-5 bg-white">
              <div className="flex gap-4 border-b border-neutral-6 bg-neutral-7/40 px-4 py-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-3 flex-1" />
                ))}
              </div>
              <div className="flex max-h-[208px] flex-col divide-y divide-neutral-6">
                {Array.from({ length: 4 }).map((_, row) => (
                  <div key={row} className="flex gap-4 px-4 py-3">
                    {Array.from({ length: 4 }).map((_, col) => (
                      <Skeleton key={col} className="h-3 flex-1" />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-[20px]">
            <div className="flex items-center gap-4">
              <Skeleton className="h-7 w-44" />
              <Skeleton className="h-4 w-4 rounded-full" />
            </div>
            <div className="overflow-hidden rounded-[12px] border border-neutral-5 bg-white">
              <div className="flex gap-4 border-b border-neutral-6 bg-neutral-7/40 px-4 py-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-3 flex-1" />
                ))}
              </div>
              <div className="flex max-h-[297px] flex-col divide-y divide-neutral-6">
                {Array.from({ length: 5 }).map((_, row) => (
                  <div key={row} className="flex gap-4 px-4 py-3">
                    {Array.from({ length: 4 }).map((_, col) => (
                      <Skeleton key={col} className="h-3 flex-1" />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <TableSkeleton rows={8} />
    </div>
  );
}
