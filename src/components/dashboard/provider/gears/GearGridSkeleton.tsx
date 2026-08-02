import { Skeleton } from "@/components/ui/skeleton";

export default function GearGridSkeleton() {
  return (
    <div>
      <div className="flex justify-between gap-6 mb-6">
        <h1 className="text-3xl font-bold w-full">My Gears</h1>
        <Skeleton className="h-9 w-full" />
        <Skeleton className="h-9 w-full" />
        <Skeleton className="h-9 w-full" />
        <Skeleton className="h-9 w-full" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="rounded-lg border">
            <Skeleton className="h-48 w-full" />
            <div className="space-y-3 p-4">
              <Skeleton className="h-6 w-2/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
