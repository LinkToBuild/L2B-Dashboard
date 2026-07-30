import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

/** Mirrors shared ProfileHeader card (avatar, status, fields, edit). */
export function ProfileHeaderSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-[12px] border border-neutral-6 bg-neutral-7",
        className,
      )}
      aria-busy
    >
      <div className="flex gap-6 p-6">
        <div className="flex min-w-[100px] flex-col items-center gap-4">
          <Skeleton className="h-20 w-20 rounded-full" />
          <Skeleton className="h-6 w-[72px] rounded-full" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Skeleton className="h-7 w-40" />
              <Skeleton className="h-3 w-36" />
              <Skeleton className="h-4 w-4 rounded-full" />
            </div>
            <Skeleton className="h-9 w-[88px] rounded-md" />
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 xl:grid-cols-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-4 w-28" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
