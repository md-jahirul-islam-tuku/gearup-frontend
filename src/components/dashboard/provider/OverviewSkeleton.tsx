import { Skeleton } from "@/components/ui/skeleton";

export default function OverviewSkeleton() {
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-4 p-4 lg:p-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="rounded-xl border bg-background p-6">
            <Skeleton className="mb-4 h-4 w-28" />

            <Skeleton className="h-10 w-16" />
          </div>
        ))}
      </div>
      <div className="rounded-xl border bg-background mt-10 h-72 w-full p-6 flex items-center ">
        <Skeleton className="h-4 w-44 mx-auto" />
      </div>
      <div className="rounded-xl border bg-background mt-10 h-28 w-full p-6">
        <Skeleton className="h-4 w-44 mb-2" />
        <Skeleton className="h-3 w-22 mb-2" />
        <Skeleton className="h-6 w-12" />
      </div>
    </div>
  );
}
