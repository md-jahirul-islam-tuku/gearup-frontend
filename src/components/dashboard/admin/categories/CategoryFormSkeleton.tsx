import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryFormSkeleton() {
  return (
    <Card className="space-y-6 p-6">
      {/* Name */}
      <div className="space-y-2">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-10 w-full" />
      </div>

      {/* Slug */}
      <div className="space-y-2">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-10 w-full" />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-32 w-full" />
      </div>

      {/* Submit Button */}
      <Skeleton className="h-10 w-full md:w-28" />
    </Card>
  );
}
