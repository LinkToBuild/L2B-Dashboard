import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export function ChartCardSkeleton({
  className,
  height = 360,
}: {
  className?: string;
  height?: number;
}) {
  return (
    <div className={cn("flex min-w-0 flex-1 flex-col gap-[10px]", className)}>
      <Skeleton className="h-6 w-28" />
      <div
        className="flex w-full items-center justify-center gap-6 rounded-[12px] border border-neutral-5 bg-white px-4"
        style={{ minHeight: height }}
      >
        <Skeleton className="h-[200px] w-[200px] shrink-0 rounded-full" />
        <div className="flex flex-col gap-4">
          <Skeleton className="h-[98px] w-[224px] rounded-xl" />
          <Skeleton className="h-[98px] w-[224px] rounded-xl" />
          <div className="grid grid-cols-2 gap-3">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
