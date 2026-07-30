import { cn } from "@/lib/utils";
import { StatCardSkeleton } from "../StatCardSkeleton";
import { SideBoardSkeleton } from "../SideBoardSkeleton";
import { TableSkeleton } from "../TableSkeleton";
import { PageHeaderSkeleton } from "../PageHeaderSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

/** Vendor list: dual KPI rows + inventory table + sideboard + orders table */
export function VendorFloorplanSkeleton({
  showHeader = true,
  className,
}: {
  showHeader?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex w-full flex-col gap-[30px]", className)} aria-busy>
      {showHeader ? <PageHeaderSkeleton /> : null}

      <div className="flex w-full justify-between gap-6">
        <div className="flex min-w-0 flex-1 flex-col gap-[10px] xl:w-[72%]">
          <div className="mb-2 flex flex-col gap-y-5">
            <div className="flex w-full justify-between gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <StatCardSkeleton key={i} className="min-w-0 flex-1" />
              ))}
            </div>
            <div className="flex w-full justify-between gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <StatCardSkeleton key={`b-${i}`} className="min-w-0 flex-1" />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 py-2">
            <Skeleton className="h-9 w-48" />
            <Skeleton className="h-9 w-28" />
          </div>
          <TableSkeleton rows={5} className="max-h-[226px]" />
        </div>
        <SideBoardSkeleton />
      </div>

      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center gap-3">
          <Skeleton className="h-9 w-40" />
          <Skeleton className="h-9 w-36" />
        </div>
        <TableSkeleton rows={8} />
      </div>
    </div>
  );
}
