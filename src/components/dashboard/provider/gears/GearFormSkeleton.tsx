import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function GearFormSkeleton() {
  return (
    <Card className="grid gap-6 p-6 md:grid-cols-2">
      {/* Gear Name */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-full" />
      </div>

      {/* Brand */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-full" />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-32 w-full" />
      </div>

      {/* Price */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-10 w-full" />
      </div>

      {/* Stock */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-full" />
      </div>

      {/* Category */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>

      {/* Images */}
      <div className="space-y-4 md:col-span-2">
        <Skeleton className="h-4 w-16" />

        {/* Image URL */}
        <div className="space-y-3 rounded-lg border p-4">
          <div className="flex gap-2">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 w-20" />
          </div>

          {/* Image Preview */}
          <Skeleton className="h-40 w-full rounded-lg" />
        </div>

        {/* Add Image */}
        <Skeleton className="h-10 w-28" />
      </div>

      {/* Submit */}
      <Skeleton className="h-10 w-full md:w-24" />
    </Card>
  );
}
