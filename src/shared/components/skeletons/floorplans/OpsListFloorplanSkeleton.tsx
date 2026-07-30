import { cn } from "@/lib/utils";
import { StatCardSkeleton } from "../StatCardSkeleton";
import { TableSkeleton } from "../TableSkeleton";
import { PageHeaderSkeleton } from "../PageHeaderSkeleton";

/**
 * Inventory ops list: KPI row + table.
 * Orders uses {@link OrdersFloorplanSkeleton} instead.
 */
export function OpsListFloorplanSkeleton({
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

      <TableSkeleton rows={8} />
    </div>
  );
}

