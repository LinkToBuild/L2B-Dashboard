import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export function SideBoardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex shrink-0 flex-col gap-[26px] rounded-[12px] border border-neutral-5 bg-white p-[12px] lg:w-[278px] 2xl:w-[300px]",
        className,
      )}
    >
      <div className="flex w-full items-center justify-between">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-3 w-12" />
        <Skeleton className="h-4 w-4 rounded-full" />
      </div>
      <div className="flex flex-col gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex w-full items-center justify-between">
            <Skeleton className="h-3 w-24" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-3 w-8" />
              <Skeleton className="h-4 w-10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
