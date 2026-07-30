import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export function TableSkeleton({
  rows = 8,
  className,
}: {
  rows?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-[12px] border border-neutral-5 bg-white",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-neutral-6 px-4 py-3">
        <Skeleton className="h-9 w-48" />
        <Skeleton className="h-9 w-28" />
        <div className="flex-1" />
        <Skeleton className="h-9 w-36" />
      </div>
      <div className="flex gap-4 border-b border-neutral-6 bg-neutral-7/40 px-4 py-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-3 flex-1" />
        ))}
      </div>
      <div className="flex flex-col divide-y divide-neutral-6">
        {Array.from({ length: rows }).map((_, row) => (
          <div key={row} className="flex gap-4 px-4 py-3.5">
            {Array.from({ length: 6 }).map((_, col) => (
              <Skeleton
                key={col}
                className={cn("h-3 flex-1", col === 0 && "max-w-[100px]")}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
