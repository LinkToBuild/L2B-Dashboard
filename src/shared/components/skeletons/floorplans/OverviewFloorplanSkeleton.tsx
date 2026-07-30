import { cn } from "@/lib/utils";
import { StatCardSkeleton } from "../StatCardSkeleton";
import { ChartCardSkeleton } from "../ChartCardSkeleton";
import { SideBoardSkeleton } from "../SideBoardSkeleton";
import { TableSkeleton } from "../TableSkeleton";
import { PageHeaderSkeleton } from "../PageHeaderSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

/** Customer-style: KPI row + earning chart + map + sideboard + table */
export function OverviewFloorplanSkeleton({
  showHeader = true,
  className,
}: {
  showHeader?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex w-full flex-col gap-6", className)} aria-busy>
      {showHeader ? <PageHeaderSkeleton /> : null}

      <div className="flex w-full justify-between gap-3 2xl:gap-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <StatCardSkeleton key={i} className="min-w-0 flex-1" />
        ))}
      </div>

      <div className="flex w-full items-start justify-between gap-[34px]">
        <div className="flex min-w-0 flex-1 items-stretch gap-[10px] 2xl:gap-[33px]">
          <ChartCardSkeleton />
          <div className="flex w-[270px] shrink-0 flex-col gap-[10px]">
            <Skeleton className="h-6 w-40" />
            <div className="flex h-[354px] w-full flex-col overflow-hidden rounded-[12px] border border-neutral-5 bg-white">
              <Skeleton className="h-[260px] w-full rounded-none" />
              <div className="flex flex-wrap justify-between gap-2 p-4">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-3 w-28" />
              </div>
            </div>
          </div>
        </div>
        <SideBoardSkeleton />
      </div>

      <TableSkeleton rows={8} />
    </div>
  );
}
