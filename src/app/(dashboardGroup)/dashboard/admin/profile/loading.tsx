import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="max-w-3xl space-y-6">
      <Skeleton className="mb-6 h-12 w-40" />

      <Skeleton className="mt-18 mx-auto h-28 w-28 rounded-full" />

      <Skeleton className="mx-auto h-7 w-48" />

      <Skeleton className="mx-auto h-5 w-64" />

      <Skeleton className="h-56 w-full" />

      <div className="grid gap-4 sm:grid-cols-2">
        <Skeleton className="h-11" />

        <Skeleton className="h-11" />
      </div>
    </div>
  );
}
