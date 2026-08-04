import { Skeleton } from "@/components/ui/skeleton";

export default function PaymentTableSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border bg-background">
      {/* Responsive Table Skeleton */}
      <div className="w-full overflow-x-auto">
        <div>
          {/* Table Header */}
          <div className="grid grid-cols-7 gap-4 bg-muted/50 px-4 py-3">
            <Skeleton className="h-5 w-20" />

            <Skeleton className="h-5 w-24" />

            <Skeleton className="h-5 w-20" />

            <Skeleton className="h-5 w-24" />

            <Skeleton className="h-5 w-20" />

            <Skeleton className="h-5 w-24" />

            <Skeleton className="h-5 w-16" />
          </div>

          {/* Table Rows */}
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-7 items-center gap-4 border-t px-4 py-4"
            >
              {/* Gear */}
              <div className="flex items-center gap-3">
                <Skeleton className="size-12 shrink-0 rounded-lg" />

                <Skeleton className="h-5 w-28" />
              </div>

              {/* Customer */}
              <Skeleton className="h-5 w-28" />

              {/* Amount */}
              <Skeleton className="h-5 w-20" />

              {/* Provider */}
              <Skeleton className="h-5 w-24" />

              {/* Status */}
              <Skeleton className="h-6 w-20 rounded-full" />

              {/* Paid At */}
              <Skeleton className="h-5 w-28" />

              {/* Action */}
              <div className="flex justify-start">
                <Skeleton className="size-8 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Skeleton */}
      <div className="flex items-center justify-between border-t p-4">
        <Skeleton className="h-9 w-24" />

        <div className="flex items-center gap-2">
          <Skeleton className="size-9" />
          <Skeleton className="size-9" />
          <Skeleton className="size-9" />
          <Skeleton className="size-9" />
        </div>
      </div>

      {/* Result Count Skeleton */}
      <div className="border-t p-4">
        <Skeleton className="h-4 w-48" />
      </div>
    </div>
  );
}
