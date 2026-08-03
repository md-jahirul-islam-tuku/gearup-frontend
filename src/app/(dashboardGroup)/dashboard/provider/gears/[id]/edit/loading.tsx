import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6 p-4">
      {/* Page Header */}
      <div className="space-y-2">
        <Skeleton className="h-9 w-40" />

        <Skeleton className="h-5 w-64" />
      </div>

      {/* Form */}
      <div className="space-y-6">
        {/* Gear Name */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-10 w-full" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-24 w-full" />
        </div>

        {/* Category + Price */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-10 w-full" />
        </div>

        {/* Image */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-24" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Skeleton className="aspect-square w-full rounded-lg" />
            <Skeleton className="aspect-square w-full rounded-lg" />
            <Skeleton className="aspect-square w-full rounded-lg" />
            <Skeleton className="aspect-square w-full rounded-lg" />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </div>
  );
}
