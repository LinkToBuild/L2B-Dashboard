import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export function StatCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-xl border border-neutral-5 bg-white p-[10px] shadow-md lg:h-[90px] lg:w-[185px] 2xl:h-[105px] 2xl:w-[239px]",
        className,
      )}
    >
      <div className="flex h-6 w-full items-center justify-between gap-2">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-4 w-4 rounded-full" />
      </div>
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-3 w-10" />
      </div>
    </div>
  );
}
