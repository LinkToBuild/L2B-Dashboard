import { cn } from "@/lib/utils";
import { StatCardSkeleton } from "../StatCardSkeleton";
import { TableSkeleton } from "../TableSkeleton";
import { PageHeaderSkeleton } from "../PageHeaderSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Mirrors Orders & Operations:
 * MatrixWidget (line + 2 cards | gauge + 2 cards) → Supply Demand bar → orders table
 */
export function OrdersFloorplanSkeleton({
  showHeader = true,
  className,
}: {
  showHeader?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex w-full flex-col gap-6", className)} aria-busy>
      {showHeader ? <PageHeaderSkeleton /> : null}

      {/* MatrixWidget — h-[211px] 2xl:h-[250px] */}
      <div className="flex h-[211px] w-full gap-[20px] 2xl:h-[250px]">
        <div className="flex w-[55%] justify-between gap-[20px]">
          <Skeleton className="h-full min-w-0 flex-1 rounded-[12px]" />
          <div className="flex h-full flex-col justify-between">
            <StatCardSkeleton />
            <StatCardSkeleton />
          </div>
        </div>

        <div className="flex w-[45%] justify-center gap-[18px]">
          <div className="flex h-[216px] w-[60%] flex-col overflow-hidden rounded-[12px] border border-neutral-5 bg-white p-[12px]">
            <div className="mb-2 flex w-full items-center justify-between">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-3 w-14" />
              <Skeleton className="h-4 w-4 rounded-full" />
            </div>
            <div className="flex min-h-0 flex-1 items-center justify-center">
              <Skeleton className="h-[140px] w-[140px] rounded-full 2xl:h-[160px] 2xl:w-[160px]" />
            </div>
          </div>
          <div className="flex h-full flex-col justify-between">
            <StatCardSkeleton />
            <StatCardSkeleton />
          </div>
        </div>
      </div>

      {/* Supply Demand Gap */}
      <div className="flex w-full flex-col gap-4">
        <div className="flex items-center gap-5">
          <Skeleton className="h-7 w-72" />
          <Skeleton className="h-5 w-5 rounded-full" />
        </div>
        <Skeleton className="h-[240px] w-full rounded-[12px]" />
      </div>

      {/* All Orders table */}
      <TableSkeleton rows={8} />
    </div>
  );
}
