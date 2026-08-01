import CategoryFormSkeleton from "@/components/dashboard/admin/categories/CategoryFormSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-9 w-48" />

      <CategoryFormSkeleton />
    </div>
  );
}
