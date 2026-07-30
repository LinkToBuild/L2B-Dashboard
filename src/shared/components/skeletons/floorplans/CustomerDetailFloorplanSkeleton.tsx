import { cn } from "@/lib/utils";
import { StatCardSkeleton } from "../StatCardSkeleton";
import { TableSkeleton } from "../TableSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Mirrors Customer Individual body under ProfileHeader:
 * Overview + KPI cards → Spend chart + side table → bottom orders table
 */
export function CustomerDetailFloorplanSkeleton({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("flex w-full flex-col gap-[30px]", className)} aria-busy>
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
        <div className="flex w-full flex-wrap items-center justify-between gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <StatCardSkeleton key={i} className="min-w-0 flex-1" />
          ))}
        </div>
      </div>

      <div className="flex h-[400px] w-full">
        <div className="flex w-[47%] flex-col gap-[6px] p-4">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-4">
              <Skeleton className="h-7 w-20" />
              <Skeleton className="h-3 w-3 rounded-full" />
            </div>
            <Skeleton className="h-3 w-14" />
          </div>
          <Skeleton className="h-[300px] w-full rounded-[12px]" />
        </div>
        <div className="flex w-[52%] flex-col gap-[6px] p-4">
          <div className="flex items-center justify-between gap-3">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-9 w-40" />
          </div>
          <div className="min-h-0 flex-1 overflow-hidden rounded-[12px] border border-neutral-5 bg-white">
            <div className="flex gap-3 border-b border-neutral-6 bg-neutral-7/40 px-3 py-3">
              {Array.from({ length: 7 }).map((_, i) => (
                <Skeleton key={i} className="h-3 flex-1" />
              ))}
            </div>
            <div className="flex flex-col divide-y divide-neutral-6">
              {Array.from({ length: 5 }).map((_, row) => (
                <div key={row} className="flex gap-3 px-3 py-3">
                  {Array.from({ length: 7 }).map((_, col) => (
                    <Skeleton key={col} className="h-3 flex-1" />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[12px]">
        <div className="flex items-center justify-between gap-3">
          <Skeleton className="h-9 w-48" />
          <Skeleton className="h-9 w-36" />
        </div>
        <TableSkeleton rows={8} />
      </div>
    </div>
  );
}
