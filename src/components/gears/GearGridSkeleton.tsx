import { Skeleton } from "@/components/ui/skeleton";

export default function GearGridSkeleton() {
  return (
    <div className="container mx-auto max-w-6xl py-10">
      <Skeleton className="mb-3 h-8 w-72" />

      <Skeleton className="mb-10 h-5 w-96" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="space-y-3 rounded-xl border p-4">
            <Skeleton className="h-52 w-full rounded-lg" />

            <Skeleton className="h-5 w-40" />

            <Skeleton className="h-4 w-full" />

            <Skeleton className="h-4 w-2/3" />

            <Skeleton className="h-10 w-full rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
