import { Skeleton } from "@/components/ui/skeleton";

export default function OverviewSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="rounded-xl border bg-background p-6">
          <Skeleton className="mb-4 h-4 w-28" />

          <Skeleton className="h-10 w-16" />
        </div>
      ))}
    </div>
  );
}
