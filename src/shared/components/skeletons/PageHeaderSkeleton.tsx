import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export function PageHeaderSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-full flex-wrap items-center justify-between gap-4",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="h-9 w-48 rounded-lg" />
      </div>
      <div className="flex items-center gap-3">
        <Skeleton className="h-9 w-28 rounded-lg" />
        <Skeleton className="h-9 w-36 rounded-lg" />
        <Skeleton className="h-9 w-36 rounded-lg" />
      </div>
    </div>
  );
}
