import CategoryFormSkeleton from "@/components/dashboard/admin/categories/CategoryFormSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6 p-4 lg:p-4">
      <Skeleton className="h-9 w-48" />

      <CategoryFormSkeleton />
    </div>
  );
}
