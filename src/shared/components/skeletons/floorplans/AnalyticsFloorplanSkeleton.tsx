import { cn } from "@/lib/utils";
import { StatCardSkeleton } from "../StatCardSkeleton";
import { TableSkeleton } from "../TableSkeleton";
import { PageHeaderSkeleton } from "../PageHeaderSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

type AnalyticsVariant = "marketing" | "payment";

/**
 * Marketing / Payment analytics floorplans.
 * Growth uses {@link GrowthFloorplanSkeleton}.
 */
export function AnalyticsFloorplanSkeleton({
  showHeader = true,
  variant = "marketing",
  className,
}: {
  showHeader?: boolean;
  variant?: AnalyticsVariant;
  className?: string;
}) {
  return (
    <div className={cn("flex w-full flex-col gap-6", className)} aria-busy>
      {showHeader ? <PageHeaderSkeleton /> : null}

      {variant === "payment" ? (
        <div className="flex w-full justify-between gap-8">
          <div className="flex min-h-[356px] min-w-0 flex-1 items-center gap-4 rounded-[12px] border border-neutral-5 bg-white p-5">
            <Skeleton className="h-[220px] w-[220px] shrink-0 rounded-full" />
            <div className="flex flex-col gap-5">
              <StatCardSkeleton />
              <StatCardSkeleton />
              <div className="grid grid-cols-2 gap-3">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
          </div>
          <div className="flex w-full max-w-[530px] flex-wrap justify-between gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <StatCardSkeleton
                key={i}
                className="h-[98px] w-[224px] lg:h-[98px] lg:w-[224px] 2xl:h-[98px] 2xl:w-[224px]"
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex w-full justify-between gap-3 2xl:gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <StatCardSkeleton key={i} className="min-w-0 flex-1" />
          ))}
        </div>
      )}

      {variant === "marketing" && (
        <div className="flex w-full justify-between gap-[22px]">
          <div className="flex w-[382px] flex-col gap-3">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-[211px] w-full rounded-lg" />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-3">
            <Skeleton className="h-6 w-44" />
            <Skeleton className="h-[230px] w-full rounded-lg" />
          </div>
          <div className="flex w-[280px] shrink-0 flex-col gap-3">
            <Skeleton className="h-6 w-36" />
            <Skeleton className="h-[230px] w-full rounded-lg" />
          </div>
        </div>
      )}

      {variant === "payment" && (
        <div className="flex w-full flex-col gap-4 rounded-[12px] border border-neutral-5 bg-white p-4">
          <div className="flex gap-3">
            <Skeleton className="h-9 w-28 rounded-lg" />
            <Skeleton className="h-9 w-28 rounded-lg" />
          </div>
          <Skeleton className="h-[200px] w-full rounded-lg" />
        </div>
      )}

      <TableSkeleton rows={variant === "payment" ? 4 : 8} />
    </div>
  );
}

