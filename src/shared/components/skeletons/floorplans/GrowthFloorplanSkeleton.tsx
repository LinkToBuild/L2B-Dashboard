import { cn } from "@/lib/utils";
import { StatCardSkeleton } from "../StatCardSkeleton";
import { SideBoardSkeleton } from "../SideBoardSkeleton";
import { PageHeaderSkeleton } from "../PageHeaderSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

function FunnelPanelSkeleton({ titleWidth }: { titleWidth: string }) {
  return (
    <div className="flex min-w-0 flex-col gap-[12px]">
      <div className="flex items-center justify-between gap-3">
        <Skeleton className={cn("h-6", titleWidth)} />
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-40" />
          <Skeleton className="h-9 w-36 rounded-lg" />
        </div>
      </div>
      <div className="relative min-h-[507px] min-w-0 rounded-[12px] border border-neutral-5 bg-white p-4">
        <div className="flex flex-col gap-[14px]">
          {Array.from({ length: 7 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-10 rounded-md"
              style={{ width: `${92 - i * 8}%` }}
            />
          ))}
        </div>
        <div className="absolute bottom-[42px] right-[18px] z-10 flex h-[92px] w-[166px] flex-col justify-between rounded-[12px] border border-neutral-6 bg-white p-[10px]">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
          <div className="flex justify-between">
            <Skeleton className="h-3 w-12" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Mirrors Growth & Behaviour:
 * metrics (line + 2×2 cards + RFM sideboard) → searches table + sessions map → dual funnels
 */
export function GrowthFloorplanSkeleton({
  showHeader = true,
  className,
}: {
  showHeader?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex w-full flex-col gap-[20px]", className)} aria-busy>
      {showHeader ? <PageHeaderSkeleton /> : null}

      {/* GrowthMetricsWidget */}
      <div className="flex w-full items-start justify-between gap-[12px]">
        <div className="flex w-[382px] shrink-0 flex-col gap-2">
          <Skeleton className="h-[211px] w-full rounded-[12px]" />
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-3 w-16" />
            ))}
          </div>
        </div>

        <div className="grid h-[232px] w-[500px] shrink-0 grid-cols-2 gap-[16px]">
          {Array.from({ length: 4 }).map((_, i) => (
            <StatCardSkeleton
              key={i}
              className="h-full w-full max-w-none lg:h-full lg:w-full 2xl:h-full 2xl:w-full"
            />
          ))}
        </div>

        <div className="ml-[35px] h-[268px] w-[368px] shrink-0">
          <SideBoardSkeleton className="h-full w-full lg:w-full 2xl:w-full" />
        </div>
      </div>

      {/* Searches table + Sessions by locations */}
      <div className="flex items-start gap-[54px]">
        <div className="h-[294px] min-w-0 flex-1 overflow-hidden rounded-[16px] bg-white">
          <div className="flex gap-4 border-b border-neutral-6 bg-neutral-7/40 px-4 py-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-3 flex-1" />
            ))}
          </div>
          <div className="flex max-h-[250px] flex-col divide-y divide-neutral-6">
            {Array.from({ length: 5 }).map((_, row) => (
              <div key={row} className="flex gap-4 px-4 py-3.5">
                {Array.from({ length: 5 }).map((_, col) => (
                  <Skeleton
                    key={col}
                    className={cn("h-3 flex-1", col === 0 && "max-w-none flex-[2]")}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="h-[300px] w-[280px] shrink-0 rounded-[16px] border border-neutral-6 bg-white p-[12px]">
          <Skeleton className="h-[126px] w-full rounded-[8px]" />
          <div className="mt-[12px]">
            <div className="mb-[14px] flex items-center gap-[8px]">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-[14px] w-[14px] rounded-full" />
            </div>
            <div className="flex flex-col gap-[14px]">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-[6px]">
                  <div className="flex justify-between">
                    <Skeleton className="h-3 w-28" />
                    <Skeleton className="h-3 w-8" />
                  </div>
                  <Skeleton className="h-[6px] w-full rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rental + Material funnels */}
      <div className="grid w-full min-w-0 grid-cols-2 gap-[80px]">
        <FunnelPanelSkeleton titleWidth="w-32" />
        <FunnelPanelSkeleton titleWidth="w-36" />
      </div>
    </div>
  );
}
